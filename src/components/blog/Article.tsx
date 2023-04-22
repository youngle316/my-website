import { allBlogs } from 'contentlayer/generated';
import { Link } from 'next-intl';

type BlogProps = {
  category: 'blog' | 'weekly';
};

function Blog({ category }: BlogProps) {
  return (
    <div className="flex flex-col gap-4">
      {allBlogs
        .filter((item) => item.category === category)
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
              href={`/${category}/${post.slug}`}
              className="font-normal underline-offset-4 hover:text-[#006ace] hover:underline dark:hover:text-[#52a9ff]"
            >
              <div>{post.title}</div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Blog;
