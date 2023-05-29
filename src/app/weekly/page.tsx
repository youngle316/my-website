import Article from '@/components/blog/Article';
import Balancer from 'react-wrap-balancer';

export const metadata = {
  title: '我的周刊',
  description: '我的全部周刊'
};

function Blog() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl md:max-w-5xl">
          <div style={{ opacity: 1, transform: 'none' }}>
            <h2>全部周刊</h2>
            <Balancer className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              🫰 博客周刊每周更新，主要描绘自己的想法，记录自己的心路历程
            </Balancer>
            <Article category="weekly" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
