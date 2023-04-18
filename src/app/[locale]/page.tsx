'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <h1>👋&nbsp;{t('welcome')}</h1>
      <p>{t.rich('paragraph1')}</p>
      <p>{t.rich('paragraph2')}</p>
      <p>{t.rich('paragraph3')}</p>

      <h2>🔖&nbsp;{t('openSource')}</h2>
      <h3>chatgpt-nextjs</h3>
      <ul role="list" className="list-disc space-y-3 pl-5 marker:text-lime-400">
        <li>{t.rich('chatgpt')}</li>
        <li>
          <a
            target="_blank"
            href="https://github.com/youngle316/chatgpt-nextjs"
            className="innerLink"
          >
            https://github.com/youngle316/chatgpt-nextjs
          </a>
        </li>
      </ul>

      <h3>ASRock-Z370M-ITX-AC</h3>
      <ul role="list" className="list-disc space-y-3 pl-5 marker:text-lime-400">
        <li>{t.rich('hackintosh')}</li>
        <li>
          <a
            target="_blank"
            href="https://github.com/youngle316/chatgpt-nextjs"
            className="innerLink"
          >
            https://github.com/youngle316/ASRock-Z370M-ITX-AC
          </a>
        </li>
      </ul>

      <h2>🔨&nbsp;{t('tools')}</h2>
      <h3>{t('software')}</h3>
      <ul
        role="list"
        className="list-disc space-y-3 pl-5 marker:text-indigo-400"
      >
        <li>{t.rich('software-li1')}</li>
        <li>{t.rich('software-li2')}</li>
        <li>{t.rich('software-li3')}</li>
        <li>{t.rich('software-li4')}</li>
        <li>{t.rich('software-li5')}</li>
        <li>{t.rich('software-li6')}</li>
      </ul>
      <h3>{t('hardware')}</h3>
      <ul
        role="list"
        className="list-disc space-y-3 pl-5 marker:text-stone-400"
      >
        <li>{t.rich('hardware-li1')}</li>
        <li>{t.rich('hardware-li2')}</li>
      </ul>
    </>
  );
}
