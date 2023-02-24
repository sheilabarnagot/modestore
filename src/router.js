import { createRouter, createWebHashHistory } from 'vue-router'

import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import AccountView from './views/AccountView.vue'
import ShoppingView from './views/ShoppingView.vue'
import MenuButtonView from './views/MenuButtonView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'
import DamComp from './components/dam/DamComp.vue'
import HerrComp from './components/herr/HerrComp.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: MenuButtonView,
      path: '/menu',
      children: [
        {
          path: 'dam',
          component: DamComp
        },
        {
          path: 'herr',
          component: HerrComp
        },
        {
          path: 'shopping',
          component: ShoppingView
        }
      ]
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
    },

  ]
})

/*
import Product1 from './components/Product1.vue'
import Product2 from './components/Product2.vue'
import Product3 from './components/Product3.vue'
// add more imports for other product components

const routes = [
  { path: '/product/1', component: Product1 },
  { path: '/product/2', component: Product2 },
  { path: '/product/3', component: Product3 },
  // add more routes for other products
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
*/
/*
const routes = [
  {
    path: '/product/:id',
    component: Product,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
*/
