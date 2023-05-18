import '../styles/globals.css';
import { Background } from './Background';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ThemeProvider from '@/provider/ThemeProvider';
import Analytic from './Analytics';
import localFont from '@next/font/local';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata | undefined> {
  const ogImage =
    'https://tohvlvtcdfndxfxeeeaa.supabase.co/storage/v1/object/public/my-website/assets/home.jpg';

  return {
    title: 'YoungLe',
    description: 'Developer, gamer, and creator.',
    openGraph: {
      title: 'YoungLe',
      description: 'Developer, gamer, and creator.',
      type: 'website',
      url: 'https://younglele.cn',
      siteName: 'YoungLe',
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1440
        }
      ],
      locale: 'zh-CN'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'YoungLe',
      site: 'https://twitter.com/youngle316',
      description: 'Developer, gamer, and creator.',
      images: [ogImage]
    }
  };
}

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Inter-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Inter-Bold.otf',
      weight: '500'
    }
  ],
  variable: '--font-inter'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${inter.variable} font-sans`}>
      <body className="relative bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
        <ThemeProvider>
          <Analytic />
          <Background />
          <main className="mx-2 flex min-h-screen max-w-screen-lg flex-col md:mx-4 md:mt-0 lg:mx-auto">
            <section className="relative z-20 mt-3 flex w-full flex-auto flex-col border border-transparent bg-zinc-50 p-5 pb-36 dark:border-zinc-800 dark:bg-zinc-900 md:mt-0 md:p-7 md:pb-36 lg:p-9 lg:pb-44">
              <Sidebar />
              <article className="prose dark:prose-invert prose-headings:tracking-tighter prose-h1:text-2xl prose-p:leading-loose prose-p:tracking-tight prose-li:tracking-tight prose-img:rounded-xl lg:prose-h1:text-4xl">
                {children}
              </article>
              <Footer />
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
