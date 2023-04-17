'use client';

import { allBlogs } from 'contentlayer/generated';
import { Link } from 'next-intl';
import ViewCounter from './ViewCounter';

function Blog() {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
      <h1>Blog</h1>
      <div className="flex flex-col gap-4">
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
              className="flex flex-col gap-2 md:flex-row md:gap-12"
              href={`/blog/${post.slug}`}
            >
              <div className="text-stone-400">{post.publishedAt}</div>
              <div>{post.title}</div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Blog;
