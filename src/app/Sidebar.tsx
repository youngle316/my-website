'use client';

import Logo from '@/components/Logo';
import Link from 'next/link';
import Nav from './Nav';
import ToggleTheme from './ToggleTheme';

function Sidebar() {
  return (
    <aside>
      <div className="mb-3 flex flex-col gap-3 md:mb-6">
        <div className="flex justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-4">
            <ToggleTheme />
          </div>
        </div>
        <Nav />
      </div>
    </aside>
  );
}

export default Sidebar;
