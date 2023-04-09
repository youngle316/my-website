'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return <div>{t('title')}</div>;
}
