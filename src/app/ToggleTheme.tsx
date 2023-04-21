import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

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
          <FiMoon className="h-5 w-5" />
        </>
      ) : (
        <>
          <FiSun className="h-5 w-5" />
        </>
      )}
    </div>
  );
}

export default ToggleTheme;
