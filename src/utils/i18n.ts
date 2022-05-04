import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: {
    appName: 'One Line Diary',
    diary: 'Diary',
    setting: 'Setting',
    license: 'License',
    login: 'Login',
    logout: 'Logout',
  },
  ja: {
    appName: 'One Line Diary',
    diary: '日記',
    setting: '設定',
    license: 'ライセンス',
    login: 'ログイン',
    logout: 'ログアウト',
  },
};
i18n.locale = Localization.locale;

i18n.fallbacks = true;

export { i18n };
