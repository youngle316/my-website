import { allBlogs } from 'contentlayer/generated';
import { Link } from 'next-intl';

export const metadata = {
  title: 'YoungLe Blog',
  description: 'YoungLe Blog Total Posts'
};

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
            <div className="flex flex-col gap-2 md:flex-row md:gap-12">
              <div className="tabular-nums text-stone-400">
                {post.publishedAt}
              </div>
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="font-normal underline-offset-4 hover:text-[#006ace] hover:underline dark:hover:text-[#52a9ff]"
              >
                <div>{post.title}</div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
