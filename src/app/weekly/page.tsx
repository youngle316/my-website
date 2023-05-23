import Article from '@/components/blog/Article';

export const metadata = {
  title: '我的周刊',
  description: '我的全部周刊'
};

function Blog() {
  return (
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className='home-title'>全部周刊</div>
      <Article category="weekly" />
    </div>
  );
}

export default Blog;
