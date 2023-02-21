import { createRouter, createWebHashHistory } from 'vue-router'

import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import Cart from './views/Cart.vue'

import AccountView from './views/AccountView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Cart,
      path: '/cart'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: AccountView,
      path: '/account',
      children: [
        {
          path: 'kop',
          component: MyAccountComp
        },
        {
          path: 'konto',
          component: MyAccountComp
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
          component: MyAccountComp
        }
        // {
        //   path: 'settings',
        //   component: KlaraView
        // }
      ]
    }
  ]
})
