'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Mail, Rss } from 'lucide-react';

const ICON_SIZE = 20;

function Social() {
  return (
    <div className="flex gap-6">
      <a href="https://github.com/youngle316" target="_blank">
        <Github size={ICON_SIZE} className="social-svg" />
      </a>
      <a href="https://twitter.com/youngle316" target="_blank">
        <Twitter size={ICON_SIZE} className="social-svg" />
      </a>
      <a href="mailto:youngle316@gmail.com" target="_blank">
        <Mail size={ICON_SIZE} className="social-svg" />
      </a>

      <Link target="_blank" href="/rss.xml">
        <Rss size={ICON_SIZE} className="social-svg" />
      </Link>
    </div>
  );
}

export default Social;
