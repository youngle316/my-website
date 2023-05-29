'use client';

import React from 'react';
import type { UserTitlesResponse, TrophyTitle } from 'psn-api';
import Image from 'next/image';
import useSWR from 'swr';

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Psn() {
  const { data } = useSWR<UserTitlesResponse>('/api/psn/trophyList', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const trophyList = data || { trophyTitles: [] };
  const totalTrophies = {
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0
  };
  data?.trophyTitles.forEach((title: TrophyTitle) => {
    totalTrophies.bronze += title.earnedTrophies.bronze;
    totalTrophies.silver += title.earnedTrophies.silver;
    totalTrophies.gold += title.earnedTrophies.gold;
    totalTrophies.platinum += title.earnedTrophies.platinum;
  });

  return (
    <div>
      {trophyList.trophyTitles.length > 0 && (
        <>
          <div className="text-sm text-zinc-400">最近游玩 🎮</div>
          <div className="flex justify-center">
            <Image
              src={trophyList.trophyTitles[0].trophyTitleIconUrl}
              alt="recent"
              width={550}
              height={500}
              quality={100}
            />
          </div>
          <div className="flex h-20">
            <div className="trophies">
              <div>总奖杯</div>
              <div>
                {totalTrophies.bronze +
                  totalTrophies.silver +
                  totalTrophies.gold +
                  totalTrophies.platinum}
              </div>
            </div>
            <Trophies
              num={totalTrophies.platinum}
              alt="platinum"
              src="/assets/platinum.png"
            />
            <Trophies
              num={totalTrophies.gold}
              alt="gold"
              src="/assets/gold.png"
            />
            <Trophies
              num={totalTrophies.silver}
              alt="silver"
              src="/assets/silver.png"
            />
            <Trophies
              num={totalTrophies.bronze}
              alt="bronze"
              src="/assets/bronze.png"
            />
          </div>
        </>
      )}
    </div>
  );
}

const Trophies = ({
  num,
  src,
  alt
}: {
  num: number;
  src: string;
  alt: string;
}) => {
  return (
    <div className="trophies">
      <Image className="my-0" src={src} alt={alt} width={40} height={40} />
      <div>{num}</div>
    </div>
  );
};
