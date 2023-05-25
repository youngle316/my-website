'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Popover } from '@headlessui/react';
import links from '@/lib/navLinks';

function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="md:hidden">
        <Popover className="relative">
          <Popover.Button
            className="group flex items-center gap-1 rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur 
          focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 
          dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80"
          >
            前往
            <ChevronDown size={16} />
          </Popover.Button>

          <Popover.Panel>
            {({ close }) => (
              <>
                <div
                  onClick={() => close()}
                  className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80"
                />
                <div className="fixed inset-x-4 top-8 z-50 origin-top scale-100 grid-cols-2 rounded-3xl bg-gradient-to-b from-zinc-100/75 to-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:from-zinc-900/50 dark:to-zinc-900 dark:ring-zinc-800">
                  <div className="flex justify-between">
                    <h2>站内导航</h2>
                    <button onClick={() => close()}>
                      <X size={24} />
                    </button>
                  </div>
                  <nav className="mt-6">
                    <ul className="-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                      {links.map(({ label, href }) => {
                        return (
                          <li key={label}>
                            <Link
                              className="block py-2"
                              href={href}
                              onClick={() => close()}
                            >
                              {label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </>
            )}
          </Popover.Panel>
        </Popover>
      </div>

      <nav className="group pointer-events-auto relative hidden rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur [--spotlight-color:rgb(236_252_203_/_0.6)] dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-zinc-100/10 dark:[--spotlight-color:rgb(217_249_157_/_0.07)] md:block">
        <div className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <ul className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  className={`relative block whitespace-nowrap px-3 py-2 transition  ${
                    isActive ? 'text-violet-600 dark:text-violet-400' : ''
                  }`}
                  href={href}
                >
                  <div
                    className={`flex items-center gap-1 ${
                      !isActive &&
                      'hover:text-violet-600/50 dark:hover:text-violet-400'
                    } `}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-violet-700/0 via-violet-700/70 to-violet-700/0 dark:from-violet-400/0 dark:via-violet-400/40 dark:to-violet-400/0"
                      layoutId="cover"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
