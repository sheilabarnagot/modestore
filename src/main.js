import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { i18n } from './plugins/i18n.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import VueKinesis from 'vue-kinesis'
// import { StripePlugin } from '@vue-stripe/vue-stripe'
// const options = {
//   pk: process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE
// }

createApp(App).use(router).use(store).use(i18n).use(VueKinesis).mount('#app')
// .Vue.use(StripePlugin, options)
