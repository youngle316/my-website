'use client';

import Logo from '@/components/Logo';
import { Link } from 'next-intl';
import Nav from './Nav';

function Sidebar() {
  return (
    <aside className="md:mx-0 md:w-44 md:flex-shrink-0 md:px-0">
      <div className="mb-3 ml-3 md:mb-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <Nav />
    </aside>
  );
}

export default Sidebar;
