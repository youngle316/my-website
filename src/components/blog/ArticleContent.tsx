import React from 'react';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import ViewCounter from '@/app/blog/ViewCounter';
import { Mdx } from '@/components/mdx';
import Comments from '@/components/Comments';
import { CalendarCheck, Ship, Newspaper, Mouse, Hourglass } from 'lucide-react';

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
    <div className="mx-auto max-w-5xl">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <section className="my-10">
            <script type="application/ld+json">
              {JSON.stringify(post.structuredData)}
            </script>
            <div className="flex justify-between text-zinc-400">
              <div className="flex items-center gap-2 text-sm">
                <Newspaper size={14} />
                {post.tag}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CalendarCheck size={14} />
                {post.publishedAt}
              </div>
            </div>
            <h1 className="my-10 font-bold text-zinc-800 dark:text-zinc-100">
              <Balancer>{post.title}</Balancer>
            </h1>
            <div className="flex gap-6 font-medium text-zinc-700/50 dark:text-zinc-300/50">
              <span className="mb-8 flex items-center gap-1 text-sm text-zinc-400">
                <Mouse size={14} />
                <div className="flex">
                  <ViewCounter slug={post.slug} trackView />
                  次点击
                </div>
              </span>
              <span className="mb-8 flex items-center gap-1 text-sm text-zinc-400">
                <Hourglass size={14} />
                <span>{Math.floor(post.body.raw.length / 300)}分钟阅读</span>
              </span>
            </div>
            <Mdx code={post.body.code} />
            <div className="mt-16 divide-y divide-zinc-200 pb-8 transition-colors dark:divide-zinc-700">
              <Comments />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
