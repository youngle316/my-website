'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, MoonStar } from 'lucide-react';

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
    <div onClick={changeTheme} className="flex cursor-pointer md:justify-end md:flex-1">
      <div
        className="group pointer-events-auto rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg 
      shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition 
      dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        {theme === 'light' ? (
          <>
            <MoonStar size="24" />
          </>
        ) : (
          <>
            <Sun size="24" />
          </>
        )}
      </div>
    </div>
  );
}

export default ToggleTheme;
