import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: { diary: 'Diary', setting: 'Setting' },
  ja: { diary: '日記', setting: '設定' },
};
i18n.locale = Localization.locale;

i18n.fallbacks = true;

export { i18n };
