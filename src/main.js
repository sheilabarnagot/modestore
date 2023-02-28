import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { i18n } from './plugins/i18n.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).use(store).use(i18n).mount('#app')
