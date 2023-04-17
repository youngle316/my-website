import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
    <div onClick={changeTheme} className="sidebar-switcher">
      {theme === 'light' ? (
        <>
          <MoonIcon className="h-5 w-5" />
        </>
      ) : (
        <>
          <SunIcon className="h-5 w-5" />
        </>
      )}
    </div>
  );
}

export default ToggleTheme;
