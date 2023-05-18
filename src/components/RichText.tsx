import { Link } from 'next-intl';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const innerLink = (text: string, href: string) => {
  return (
    <Link href={href} className="innerLink">
      <span>{text}</span>
      <ArrowDownLeft className="ml-px h-3 w-3" />
    </Link>
  );
};

const externalLink = (text: string, href: string) => {
  return (
    <a href={href} className="innerLink" target="_blank">
      <span>{text}</span>
      <ArrowUpRight className="ml-px h-3 w-3" />
    </a>
  );
};

export const DefaultRichTextComponents = {
  br: () => <br />,
  b: (text: string) => <strong>{text}</strong>,
  'project-link': (text: string) => innerLink(text, '/project'),
  'blog-link': (text: string) => innerLink(text, '/blog'),
  'Next.js-link': (text: string) => externalLink(text, 'https://nextjs.org/'),
  'tailwindcss-link': (text: string) =>
    externalLink(text, 'https://tailwindcss.com/'),
  'vercel-link': (text: string) => externalLink(text, 'https://vercel.com/'),
  'mdx-link': (text: string) => externalLink(text, 'https://mdxjs.com/'),
  'contentLayer-link': (text: string) =>
    externalLink(text, 'https://www.contentlayer.dev/'),
  'vsCode-link': (text: string) =>
    externalLink(text, 'https://code.visualstudio.com/'),
  'github-theme-link': (text: string) =>
    externalLink(
      text,
      'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme'
    ),
  'notion-link': (text: string) => externalLink(text, 'https://www.notion.so'),
  'arc-link': (text: string) => externalLink(text, 'https://arc.net/'),
  'spotify-link': (text: string) =>
    externalLink(text, 'https://open.spotify.com/'),
  'linear-link': (text: string) => externalLink(text, 'https://linear.app/'),
  'github-link': (text: string) =>
    externalLink(text, 'https://github.com/youngle316')
};
