import React from 'react';
import AnchorLink from './Link';

type ContentListProps = {
  main?: string;
  href: string;
  name: string;
  des?: string;
  showIcon?: boolean;
};

function ContentList({
  main = '',
  href,
  name,
  des = '',
  showIcon = false
}: ContentListProps) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-3">
      <div className="w-28 text-zinc-400 tabular-nums">{main}</div>
      <div>
        <div>
          <AnchorLink href={href} name={name} showIcon={showIcon} />
        </div>
        {des && <div className="text-sm text-zinc-400">{des}</div>}
      </div>
    </div>
  );
}

export default ContentList;
