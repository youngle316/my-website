import { NextResponse } from 'next/server';
import RSS from 'rss';
import { allBlogs } from 'contentlayer/generated';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export async function GET() {
  const siteURL = 'https://younglele.cn';

  const feed = new RSS({
    title: 'Le Blog',
    description: 'YoungLe Blog, a blog about web development and life.',
    site_url: siteURL,
    feed_url: `${siteURL}/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, YoungLe`
  });

  await allBlogs
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(async (post) => {
      const result = await remark()
        .use(remarkHtml)
        .use(remarkGfm)
        .process(post.body.raw);
      feed.item({
        title: post.title,
        url: `${siteURL}/blog/${post.slug}`,
        date: post.publishedAt,
        description: result.toString()
      });
    });
  return new NextResponse(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      'Content-Type': 'text/xml'
    }
  });
}
