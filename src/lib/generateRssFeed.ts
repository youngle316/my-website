import { writeFileSync } from 'fs';
import { allBlogs } from 'contentlayer/generated';
import RSS from 'rss';

export default async function getRSS() {
  const siteURL = 'https://younglele.cn';

  const feed = new RSS({
    title: 'YoungLe',
    description: 'YoungLe Blog, a blog about web development and life.',
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
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

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}
