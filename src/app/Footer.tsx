'use client';

import { Users } from 'lucide-react';
import ViewCounter from './blog/ViewCounter';

function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-10 flex h-20 flex-col items-center justify-center gap-2">
      <div className="h-px w-1/2 rounded-xl bg-gradient-to-r from-stone-50 to-stone-200 dark:from-stone-900 dark:to-stone-700" />
      <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">© 1994 - 2023 YoungLe</p>
      <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
        <Users size={16} />
        总浏览量
        <ViewCounter slug="totalViews" trackView />
      </div>
    </footer>
  );
}

export default Footer;
