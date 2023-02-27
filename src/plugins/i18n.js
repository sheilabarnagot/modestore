import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'se', 'es'],
  messages: messages
})

// https://www.youtube.com/watch?v=Nle4AQPQUwU
// https://stackoverflow.com/questions/66732739/internationalization-for-vue-3-vite-with-i18n
