import React from 'react';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import ViewCounter from '@/app/blog/ViewCounter';
import { Mdx } from '@/components/mdx';
import Comments from '@/components/Comments';
import { ScrollText, CalendarHeart, Pointer, Ship } from 'lucide-react';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug
  }));
}

type Params = {
  slug: string;
};

function ArticleContent({ params }: { params: Params }) {
  const post: any = allBlogs.find((post) => post.slug === params.slug);
  return (
    <section className="my-10">
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="flex justify-between text-zinc-400">
        <div className="flex items-center gap-2 text-sm">
          <ScrollText size={14} />
          {post.category}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CalendarHeart size={14} />
          {post.publishedAt}
        </div>
      </div>
      <h1 className="my-10 font-bold text-zinc-800 dark:text-zinc-100">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex gap-4 font-medium text-zinc-700/50 dark:text-zinc-300/50">
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
          <Pointer size={14} />
          <div className='flex'>
            <ViewCounter slug={post.slug} trackView />
            次点击
          </div>
        </div>
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
          <Ship size={14} />
          <span>{Math.floor(post.body.raw.length / 300)}分钟阅读</span>
        </div>
      </div>
      <Mdx code={post.body.code} />
      <div className="divide-y divide-zinc-200 pb-8 transition-colors dark:divide-zinc-700">
        <Comments />
      </div>
    </section>
  );
}

export default ArticleContent;
