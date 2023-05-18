'use client';

import { Users } from 'lucide-react';
import ViewCounter from './[locale]/blog/ViewCounter';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="absolute inset-x-0 bottom-10 flex h-20 flex-col items-center justify-center gap-2">
      <div className="h-px w-1/2 rounded-xl bg-gradient-to-r from-stone-50 to-stone-200 dark:from-stone-900 dark:to-stone-700" />
      <p className="text-sm dark:text-stone-400">Made By YoungLe</p>
      <div className="flex items-center gap-1 text-sm dark:text-stone-400">
        <Users />
        {t('totalViews')}:
        <ViewCounter slug="totalViews" trackView />
      </div>
    </footer>
  );
}

export default Footer;
