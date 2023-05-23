import Article from '@/components/blog/Article';

export const metadata = {
  title: '我的文章',
  description: '我的全部文章'
};

function Blog() {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className='home-title'>全部文章</div>
      <Article category="blog" />
    </div>
  );
}

export default Blog;
