import { NextResponse } from 'next/server';
import RSS from 'rss';
import { allBlogs } from 'contentlayer/generated';

export async function GET() {
  const siteURL = 'https://younglele.cn';

  const feed = new RSS({
    title: 'YoungLe',
    description: 'YoungLe Blog, a blog about web development and life.',
    site_url: siteURL,
    feed_url: `${siteURL}/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, YoungLe`
  });

  allBlogs
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => {
      feed.item({
        title: post.title,
        url: `${siteURL}/blogs/${post.slug}`,
        date: post.publishedAt,
        description: post.summary
      });
    });
  return new NextResponse(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      'Content-Type': 'text/xml'
    }
  });
}
