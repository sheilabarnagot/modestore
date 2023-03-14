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

// This code imports the createI18n module from the vue-i18n library and the messages object from the @intlify/unplugin-vue-i18n/messages library, to create an internationalization instance in Vue.js.

// An instance is created using the createI18n() method and passed an options object with the following properties:

// Legacy: false indicates that Vue.js legacy mode will not be used.
// GlobalInjection: true indicates that the internationalization instance will be injected into all Vue.js component instances.
// Locale: 'en' indicates that the default language is English.
// fallbackLocale: 'en' indicates that the fallback language is English, in case no translation is found for the selected language.
// availableLocales: ['en', 'se', 'es'] indicates the languages available in the application.
// messages: messages indicates that the message translations will be loaded from the previously imported messages object.

//JSON -->  JSON file works with the plugin VueI18n to load and use the translations in the application. This provides an object with the translated texts in the corresponding language, which can be used in the application using the Vue.js $t method. For example, $t('navbar.konto') would return the translated text corresponding to the "konto" property in the JSON file.
