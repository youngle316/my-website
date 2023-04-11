import '../../styles/globals.css';

import { notFound } from 'next/navigation';
import { i18n } from '@/i18n/i18n';
import { getMessages } from '@/i18n/i18n.server';
import IntlProvider from '@/provider/IntlProvider';
import { Background } from '../Background';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

export const metadata = {
  title: 'YoungLe',
  description: 'YoungLe Blog'
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: RootParams;
}) {
  let messages;
  try {
    messages = await getMessages(params);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className="bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
        <IntlProvider locale={params.locale} messages={messages}>
          <Background />
          <main className="relative mx-2 flex min-h-screen max-w-4xl flex-col pt-12 font-sans md:mx-4 md:mt-0 md:flex-row md:pt-20 lg:mx-auto lg:pt-28">
            <Sidebar />
            <section className="relative z-20 mt-3 flex w-full flex-auto flex-col border border-transparent bg-[#fefefe] p-5 pb-36 shadow-xl dark:border-stone-800 dark:bg-[#1a1a1a] md:mt-0 md:p-7 md:pb-36 lg:p-9 lg:pb-44">
              <article className="prose dark:prose-invert prose-headings:tracking-tighter prose-h1:text-2xl prose-p:leading-loose prose-p:tracking-tight prose-li:tracking-tight prose-img:rounded-xl lg:prose-h1:text-4xl">
                {children}
              </article>
              <Footer />
            </section>
          </main>
        </IntlProvider>
      </body>
    </html>
  );
}
