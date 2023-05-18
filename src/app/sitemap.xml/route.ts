import { getServerSideSitemap } from 'next-sitemap';
import { allBlogs } from 'contentlayer/generated';

export async function GET() {
  const blogs = allBlogs.map((post) => ({
    loc: `https://younglele.cn/blog/${post.slug}`,
    lastmod: post.publishedAt
  }));

  return getServerSideSitemap(blogs);
}
