import { createRouter, createWebHashHistory } from 'vue-router'

import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'

import Shopping from './views/ShoppingView.vue'

import AccountView from './views/AccountView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'
import CarouselImg from './components/CarouselImg.vue'

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
      component: Shopping,
      path: '/shopping'
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
    {
      component: CarouselImg,
      path: '/carousel'
    }
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
