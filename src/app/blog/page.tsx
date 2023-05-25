import Article from '@/components/blog/Article';

export const metadata = {
  title: '我的文章',
  description: '我的全部文章'
};

function Blog() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl md:max-w-5xl">
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="home-title">全部文章</div>
            <Article category="blog" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
