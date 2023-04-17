'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import {
  giscusRepo,
  giscusRepoId,
  giscusCategory,
  giscusCategoryId
} from '@/lib/giscus';

function Comments() {
  const { theme } = useTheme();

  return (
    <div id="comment" className="mx-auto max-w-prose py-6">
      <Giscus
        repo={giscusRepo}
        repoId={giscusRepoId}
        category={giscusCategory}
        categoryId={giscusCategoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        loading="lazy"
      />
    </div>
  );
}

export default Comments;
