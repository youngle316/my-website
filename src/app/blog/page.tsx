import Article from '@/components/blog/Article';

export const metadata = {
  title: 'YoungLe Blog',
  description: 'YoungLe Blog Total Posts'
};

function Blog() {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
      <h1>文章</h1>
      <Article category="blog" />
    </div>
  );
}

export default Blog;
