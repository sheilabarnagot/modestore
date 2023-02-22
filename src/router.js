import { createRouter, createWebHashHistory } from 'vue-router'

import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'

import AccountView from './views/AccountView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: CartView,
      path: '/cart'
    },

    {
      component: AccountView,
      path: '/account',
      children: [
        {
          path: 'favourites',
          component: MyAccountComp
        },
        {
          path: 'konto',
          component: MyAccountComp
        },
        {
          path: 'kop',
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
      ]
    }
  ]
})
