import Article from '@/components/blog/Article';

export const metadata = {
  title: '我的周刊',
  description: '我的全部周刊'
};

function Blog() {
  return (
    <div className="mx-auto max-w-5xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl md:max-w-5xl">
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="home-title">全部周刊</div>
            <Article category="weekly" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
