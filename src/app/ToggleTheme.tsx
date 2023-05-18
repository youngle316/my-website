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
    <div onClick={changeTheme} className="sidebar-switcher">
      {theme === 'light' ? (
        <>
          <MoonStar className="h-6 w-6" />
        </>
      ) : (
        <>
          <Sun className="h-6 w-6" />
        </>
      )}
    </div>
  );
}

export default ToggleTheme;
