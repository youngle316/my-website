import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const t = useTranslations('navbar');

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={changeTheme}
      className="flex cursor-pointer items-center justify-center gap-2 text-sm text-stone-400 
      hover:text-stone-800 dark:hover:text-stone-300"
    >
      {theme === 'light' ? (
        <>
          <MoonIcon className="h-4 w-4" />
          {t('dark')}
        </>
      ) : (
        <>
          <SunIcon className="h-4 w-4" />
          {t('light')}
        </>
      )}
    </div>
  );
}

export default ToggleTheme;
