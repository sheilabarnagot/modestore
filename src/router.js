import { createRouter, createWebHashHistory } from 'vue-router'

import RolandB from './views/RolandB.vue'
import AccountView from './views/AccountView.vue'
// import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
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
          component: RolandB
        },
        {
          path: 'help',
          component: RolandB
        },
        {
          path: 'settings',
          component: MyAccountComp
        }
      ]
    }
  ]
})
