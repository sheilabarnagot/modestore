import { createRouter, createWebHashHistory } from 'vue-router'

// import AboutView from './views/AboutView.vue'
// import ContactView from './views/ContactView.vue'
// import HomeView from './views/HomeView.vue'

import AccountView from './views/AccountView.vue'
import BetalningComponent from './components/BetalningComponent.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AccountView,
      path: '/account',
      children: [
        {
          path: 'kop',
          component: BetalningComponent
        },
        {
          path: 'konto',
          component: BetalningComponent
        },

        {
          path: 'favourites',
          component: BetalningComponent
        },
        {
          path: 'help',
          component: BetalningComponent
        },
        {
          path: 'settings',
          component: BetalningComponent
        }
        // {
        //   path: 'settings',
        //   component: KlaraView
        // }
      ]
    }
  ]
})
