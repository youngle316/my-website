'use client';
import React from 'react';
import { FiGithub, FiTwitter, FiInbox, FiRss } from 'react-icons/fi';
import LocaleSwitcher from './LocaleSwitcher';
import ToggleTheme from './ToggleTheme';
import { Link } from 'next-intl';

function Social() {
  return (
    <div className="flex gap-3 text-stone-400 ">
      <a
        href="https://github.com/youngle316"
        target="_blank"
        className="sidebar-switcher"
      >
        <FiGithub size={16} />
      </a>
      <a
        href="https://twitter.com/youngle316"
        target="_blank"
        className="sidebar-switcher"
      >
        <FiTwitter size={16} />
      </a>
      <a
        href="mailto:youngle316@gmail.com"
        target="_blank"
        className="sidebar-switcher"
      >
        <FiInbox size={16} />
      </a>
      <LocaleSwitcher />
      <ToggleTheme />
      <Link target="_blank" href="/rss.xml" className="sidebar-switcher">
        <FiRss className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default Social;
