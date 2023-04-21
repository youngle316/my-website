'use client';

import Logo from '@/components/Logo';
import { Link } from 'next-intl';
import Nav from './Nav';

function Sidebar() {
  return (
    <aside>
      <div className="mb-3 flex flex-col gap-3 md:mb-6">
        <Link href="/">
          <Logo />
        </Link>
        <Nav />
      </div>
    </aside>
  );
}

export default Sidebar;
