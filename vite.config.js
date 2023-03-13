import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    }),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**')
      // this configuration indicates that all language files should be searched in the src/locales folder and its subfolders so that they can be used by the VueI18n plugin
    })
  ]
})

/*KZ added  '@': fileURLToPath(new URL to make it easier with carousel.But can be used by anyone..all over the page ..blame me ;) */

// https://github.com/intlify/vite-plugin-vue-i18n/issues/74
