type RootParams = { locale: 'en' | 'zh' };

type Messages = typeof import('@/messages/en.json');
declare interface IntlMessages extends Messages {}
