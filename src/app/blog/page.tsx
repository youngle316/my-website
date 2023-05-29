import Article from '@/components/blog/Article';
import Balancer from 'react-wrap-balancer';

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
            <h2>全部文章</h2>
            <Balancer className="max-w-2xl text-zinc-600 dark:text-zinc-400">
              博客文章包括
              Web开发、算法、生活以及平时工作中的问题总结等。好记性不如烂笔头，持续写下去
              ✏️
            </Balancer>
            <Article category="blog" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
