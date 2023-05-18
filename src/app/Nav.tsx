'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Social from './Social';
import { Fan, Library, Candy } from 'lucide-react';

const links = [
  { href: '/', label: '主页', icon: Fan },
  { href: '/blog', label: '文章', icon: Library },
  { href: '/weekly', label: '周刊', icon: Candy }
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-3 text-sm font-bold">
      <div className="flex">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <div className="flex items-center justify-center" key={label}>
              <Link
                className={`text-stone-400 hover:text-stone-800 dark:hover:text-stone-300 ${
                  isActive ? 'text-stone-800 dark:text-stone-200' : ''
                }`}
                href={href}
              >
                <span className="relative flex items-center justify-center gap-1 p-2">
                  <Icon className="h-4 w-4" />
                  {label}
                  {isActive ? (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-xl border border-stone-200 bg-gradient-to-r from-white to-stone-100 
                      dark:border-stone-800 dark:bg-gradient-to-r dark:from-black dark:to-stone-800"
                      layoutId="cover"
                    />
                  ) : null}
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        <Social />
      </div>
    </nav>
  );
}

export default Nav;
