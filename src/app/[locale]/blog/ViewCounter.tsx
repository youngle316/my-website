'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type PostView = {
  slug: string;
  count: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function ViewCounter({
  slug,
  trackView
}: {
  slug: string;
  trackView: boolean;
}) {
  const { data } = useSWR<PostView[]>('/api/views', fetcher);
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const views = new Number(viewsForSlug?.count || 0);

  const isPro = process.env.NODE_ENV === 'production';

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    if (trackView && isPro) {
      registerView();
    }
  }, [slug]);

  return (
    <div className="font-mono text-xs tracking-tighter text-neutral-500">
      {data ? `${views.toLocaleString()} views` : ''}
    </div>
  );
}
