import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type AnchorLinkProps = {
  href: string;
  name: string;
  showIcon?: boolean;
};

function AnchorLink({ href, name, showIcon = false }: AnchorLinkProps) {
  return (
    <Link
      href={href}
      className="innerLink"
      target={showIcon ? '_blank' : '_self'}
    >
      <div className="flex items-center gap-1">
        <div>{name}</div>
        {showIcon && <ArrowUpRight size={16} />}
      </div>
    </Link>
  );
}

export default AnchorLink;
