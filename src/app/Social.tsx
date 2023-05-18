'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Mail, Rss } from 'lucide-react';

const ICON_SIZE = 20;

function Social() {
  return (
    <div className="flex gap-6 text-stone-400 ">
      <a
        href="https://github.com/youngle316"
        target="_blank"
        className="sidebar-switcher"
      >
        <Github size={ICON_SIZE} />
      </a>
      <a
        href="https://twitter.com/youngle316"
        target="_blank"
        className="sidebar-switcher"
      >
        <Twitter size={ICON_SIZE} />
      </a>
      <a
        href="mailto:youngle316@gmail.com"
        target="_blank"
        className="sidebar-switcher"
      >
        <Mail size={ICON_SIZE} />
      </a>

      <Link target="_blank" href="/rss.xml" className="sidebar-switcher">
        <Rss size={ICON_SIZE} />
      </Link>
    </div>
  );
}

export default Social;
