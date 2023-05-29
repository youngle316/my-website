import { allBlogs } from 'contentlayer/generated';
import ContentList from '../ContentList';

type BlogProps = {
  category: 'blog' | 'weekly';
  year?: string;
};

function Blog({ category }: BlogProps) {
  const getAllYear = () => {
    const year = allBlogs
      .sort((a, b) => {
        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
          return -1;
        }
        return 1;
      })
      .map((blog) => {
        return blog.publishedAt.split('-')[0];
      });
    return Array.from(new Set(year));
  };

  const allYear = getAllYear();

  const getBlogs = (year: string) => {
    return allBlogs.filter((item) => {
      return item.category === category && item.publishedAt.includes(year);
    });
  };

  return (
    <>
      <div>
        {allYear.map((year) => {
          return (
            <>
              {getBlogs(year).length > 0 && (
                <>
                  <div className="home-title">{year}</div>
                  <ArticleYear category={category} year={year} />
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

const ArticleYear = ({ category, year }: BlogProps) => {
  const getDate = (publishedAt: string) => {
    return publishedAt.split('-').slice(1).join(' - ');
  };

  return (
    <div className="flex flex-col gap-4">
      {allBlogs
        .filter((item) => {
          return (
            item.category === category && item.publishedAt.includes(year || '')
          );
        })
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <ContentList
            main={getDate(post.publishedAt)}
            href={`/${category}/${post.slug}`}
            name={post.title}
            des={post.des}
          />
        ))}
    </div>
  );
};

export default Blog;
