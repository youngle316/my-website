import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import ViewCounter from '../ViewCounter';
import type { Metadata } from 'next';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, summary: description } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function Blog({ params }: { params: Params }) {
  const post: any = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="max-w-[650px] font-serif text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {post.publishedAt}
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
