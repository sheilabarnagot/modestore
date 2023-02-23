import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    }),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**')
    })
  ]

})


// https://github.com/intlify/vite-plugin-vue-i18n/issues/74
