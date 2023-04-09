const supportedLanguages = [
  { id: 'zh', locale: 'zh', title: '简体中文', isDefault: true },
  { id: 'en', locale: 'en', title: 'English' }
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault)!;

export const i18n = {
  ids: supportedLanguages.map((l) => l.id),
  locales: supportedLanguages.map((l) => l.locale),
  defaultId: baseLanguage.id,
  defaultLocale: baseLanguage.locale,
  languages: supportedLanguages
};
