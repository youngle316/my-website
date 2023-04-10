'use client';

import {
  HomeModernIcon,
  TrophyIcon,
  BookOpenIcon,
  InboxIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const links = [
  { href: '/', label: 'home', icon: HomeModernIcon },
  { href: '/about', label: 'about', icon: TrophyIcon },
  { href: '/blog', label: 'blog', icon: BookOpenIcon },
  { href: '/contact', label: 'contact', icon: InboxIcon }
];

function Nav() {
  const t = useTranslations('navbar');

  const locale = useLocale();

  const pathname = usePathname();

  const replacePathname = (pathname: string) => {
    if (pathname === `/${locale}`) {
      return '/';
    }
    return pathname.replace(`/${locale}`, '');
  };

  return (
    <nav className="flex text-sm font-bold md:flex-col">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = replacePathname(pathname) === href;

        return (
          <div className="flex" key={label}>
            <Link
              className={`text-stone-400 hover:text-stone-800 ${
                isActive ? 'text-stone-800' : ''
              }`}
              href={href === '/' ? `/${locale}` : `/${locale}${href}`}
            >
              <span className="relative flex items-center justify-center gap-1 p-2">
                <Icon className="h-4 w-4" />
                {t(label as any)}
                {isActive ? (
                  <motion.div
                    className="absolute inset-0 z-[-1] rounded-xl border border-stone-200 bg-gradient-to-r from-white to-stone-100"
                    layoutId="cover"
                  />
                ) : null}
              </span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default Nav;
