'use client';

import { BookOpenIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Link } from 'next-intl';
import { motion } from 'framer-motion';
import { usePathname } from 'next-intl/client';
import { useTranslations } from 'next-intl';
import Social from './Social';
import { GiSittingDog } from 'react-icons/gi';

const links = [
  { href: '/', label: 'home', icon: GiSittingDog },
  // { href: '/about', label: 'about', icon: TrophyIcon },
  { href: '/blog', label: 'blog', icon: BookOpenIcon },
  { href: '/weekly', label: 'weekly', icon: PencilIcon }
];

function Nav() {
  const t = useTranslations('navbar');

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
                  {t(label as any)}
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
