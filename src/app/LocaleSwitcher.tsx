'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageIcon } from '@heroicons/react/24/outline';

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLocale = () => {
    router.push(`/${locale === 'en' ? 'zh' : 'en'}/${pathname}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div onClick={changeLocale} className="sidebar-switcher">
      <LanguageIcon className="h-5 w-5" />
    </div>
  );
}

export default LocaleSwitcher;
