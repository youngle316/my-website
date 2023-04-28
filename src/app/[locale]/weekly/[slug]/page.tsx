import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import ArticleContent from '@/components/blog/ArticleContent';

type Params = {
  slug: string;
};

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug
  } = post;

  const ogImage =
    'https://tohvlvtcdfndxfxeeeaa.supabase.co/storage/v1/object/public/my-website/assets/weekly.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://younglele.cn/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function Blog({ params }: { params: Params }) {
  return <ArticleContent params={params} />;
}
