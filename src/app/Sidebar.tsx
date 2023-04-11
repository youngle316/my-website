'use client';

import Logo from '@/components/Logo';
import { Link } from 'next-intl';
import Nav from './Nav';
import Social from './Social';
import LocaleSwitcher from './LocaleSwitcher';

function Sidebar() {
  return (
    <aside className="md:mx-0 md:w-44 md:flex-shrink-0 md:px-0">
      <div className="mb-3 ml-3 flex flex-col gap-3  md:fixed md:mb-6">
        <Link href="/">
          <Logo />
        </Link>
        <Nav />
        <Social />
        <div className="h-px rounded-xl bg-stone-200 dark:bg-stone-700" />
        <LocaleSwitcher />
      </div>
    </aside>
  );
}

export default Sidebar;
