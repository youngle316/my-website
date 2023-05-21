'use client';

import React, { useEffect, useState } from 'react';
import type { UserTitlesResponse, TrophyTitle } from "psn-api";
import Image from 'next/image';

function Psn() {
  const [trophyList, setTrophyList] = useState<UserTitlesResponse>({
    trophyTitles: [],
    totalItemCount: 0
  });
  const [totalTrophies, setTotalTrophies] = useState({
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0
  });

  useEffect(() => {
    fetch(`/api/psn/trophyList`).then(async (res) => {
      const data = await res.json();
      setTrophyList(data);
      const trophies = {
        bronze: 0,
        silver: 0,
        gold: 0,
        platinum: 0
      };
      data.trophyTitles.forEach((title: TrophyTitle) => {
        trophies.bronze += title.earnedTrophies.bronze;
        trophies.silver += title.earnedTrophies.silver;
        trophies.gold += title.earnedTrophies.gold;
        trophies.platinum += title.earnedTrophies.platinum;
      });
      setTotalTrophies(trophies);
    });
  }),
    [];
  return (
    <div>
      {trophyList.trophyTitles.length > 0 && (
        <>
          <div className="text-sm text-zinc-400">最近游玩</div>
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

export default Psn;

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
