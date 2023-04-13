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
      className="sidebar-switcher"
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
