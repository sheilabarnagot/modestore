import { createRouter, createWebHashHistory } from 'vue-router'

// import AboutView from './views/AboutView.vue'
// import ContactView from './views/ContactView.vue'
// import HomeView from './views/HomeView.vue'
import KlaraView from './views/KlaraView.vue'
import RolandB from './views/RolandB.vue'
import AccountView from './views/AccountView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AccountView,
      path: '/account',
      children: [
        {
          path: 'kop',
          component: KlaraView
        },
        {
          path: 'konto',
          component: RolandB
        },
        {
          path: 'favourites',
          component: KlaraView
        },
        {
          path: 'help',
          component: RolandB
        },
        {
          path: 'settings',
          component: KlaraView
        }
      ]
    }
  ]
})
