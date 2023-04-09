import '../../styles/globals.css';

import { notFound } from 'next/navigation';
import { i18n } from '@/i18n/i18n';
import { getMessages } from '@/i18n/i18n.server';
import IntlProvider from '@/provider/IntlProvider';

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
    <html lang="en">
      <body>
        <IntlProvider locale={params.locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
