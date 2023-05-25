'use client';

import { Users } from 'lucide-react';
import ViewCounter from './blog/ViewCounter';
import links from '@/lib/navLinks';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-6 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
      <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
        © 1994 - 2023 YoungLe
      </p>
      <div className="flex gap-4 text-sm font-semibold text-zinc-700 dark:text-zinc-100 ">
        {links.map(({ href, label }) => {
          return (
            <Link
              className="hover:text-violet-600 dark:hover:text-violet-400"
              key={label}
              href={href}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <span className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
        <Users size={16} />
        总浏览量
        <span>
          <ViewCounter slug="totalViews" trackView />
        </span>
      </span>
    </footer>
  );
}

export default Footer;
