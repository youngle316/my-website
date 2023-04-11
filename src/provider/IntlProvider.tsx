'use client';

import { AbstractIntlMessages, RichTranslationValues } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { DefaultRichTextComponents } from '@/components/ui/RichText';

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: React.ReactNode;
};

export default function IntlProvider({ messages, locale, children }: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={
        DefaultRichTextComponents as RichTranslationValues
      }
    >
      {children}
    </NextIntlClientProvider>
  );
}
