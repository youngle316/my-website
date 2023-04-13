'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
      {locale === 'en' ? '🇨🇳 中文' : '🇺🇲 English'}
    </div>
  );
}

export default LocaleSwitcher;
