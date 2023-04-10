'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <h1>👋&nbsp;{t('welcome')}</h1>
      <p>{t.rich('paragraph1')}</p>
    </>
  );
}
