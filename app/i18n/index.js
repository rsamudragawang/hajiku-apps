import I18n from 'react-native-i18n';

const en = require('./locales/en.json');
const id = require('./locales/id.json');

I18n.fallbacks = true;
I18n.translations = {
  en,
  id
};

export default I18n;
