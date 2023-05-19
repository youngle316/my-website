import Logo from '@/components/Logo';
import Social from './Social';
import { HOBBY_PROJECT } from '@/constant';
import ContentList from '@/components/ContentList';
import { Cookie, Eraser } from 'lucide-react';
import { allBlogs } from 'contentlayer/generated';

export default function Home() {
  return (
    <div>
      <div className="flex gap-4">
        <Logo />
        <div>
          <h3>YoungLe</h3>
          <div className="text-sm text-zinc-400">
            前端工程师 | 万事皆虚、万物皆允 • Stay Hungry、Stay Foolish
          </div>
        </div>
      </div>

      <p>👋&nbsp;大家好</p>

      <p>
        我是
        YoungLe，软件开发工程师，喜欢倒腾新工具，折腾新技术，希望用自己有线的知识给家人做出好用的产品。同时热爱游戏，刺客信条、FIFA、NBA2K
        等系列游戏的忠实粉丝。
      </p>

      <Social />

      <div>
        <div className="home-title">
          <Cookie size={20} />
          业余项目
        </div>
        <div className="flex flex-col gap-3">
          {HOBBY_PROJECT.map((item) => {
            return (
              <ContentList
                main={item.time}
                href={item.href}
                name={item.name}
                des={item.des}
                showIcon
              />
            );
          })}
        </div>
      </div>

      <div>
        <div className="home-title">
          <Eraser size={20} />
          近期文章
        </div>
        <div className="flex flex-col gap-3">
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .filter((item, index) => index < 10)
            .map((item) => {
              return (
                <ContentList
                  main={item.publishedAt}
                  href={`/${item.category}/${item.slug}`}
                  name={item.title}
                  des={item.des}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
