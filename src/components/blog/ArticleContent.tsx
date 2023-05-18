import React from 'react';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import ViewCounter from '@/app/blog/ViewCounter';
import { Mdx } from '@/components/mdx';
import Comments from '@/components/Comments';

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
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="max-w-[650px] font-serif text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {post.publishedAt}
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} />
      <div className="divide-y divide-gray-200 pb-8 transition-colors dark:divide-gray-700">
        <Comments />
      </div>
    </section>
  );
}

export default ArticleContent;
