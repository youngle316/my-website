'use client';

import { allBlogs } from 'contentlayer/generated';
import { Link } from 'next-intl';

function Blog() {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
      <h1>Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full justify-between">
              <div>{post.title}</div>
              <div>{post.publishedAt}</div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Blog;
