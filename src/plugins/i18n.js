import { createI18n } from 'vue-i18n'
import th from '../locales/th'
import en from '../locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    th,
    en
  }
})

export default i18n