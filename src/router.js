import { createRouter, createWebHashHistory } from 'vue-router'

import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import AccountView from './views/AccountView.vue'
import MenuButtonView from './views/MenuButtonView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'
import ShoppingView from './views/ShoppingView.vue'
import LogIn from './components/MyAccount/LogIn.vue'
import SignUp from './components/MyAccount/SignUp.vue'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: MenuButtonView,
      path: '/menu'
    },
    {
      component: ShoppingView,
      path: '/shopping'
    },
    {
      component: CartView,
      path: '/cart'
    },
    {
      component: BetalningComponent,
      path: '/payment'
    },
    {
      component: MyAccountComp,
      path: '/favourites'
    },
    {
      component: AccountView,
      path: '/account',
      beforeEnter: () => {
        const auth = localStorage.getItem('auth')
        return auth === 'true' ? true : '/login'
      },

      children: [
        {
          path: 'favourites',
          component: ShoppingView
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
        }
      ]
    },
    {
      component: LogIn,
      path: '/login'
    },
    {
      component: SignUp,
      path: '/signup'
    }
  ]
})

/*
import Product1 from './components/Product1.vue'
import Product2 from './components/Product2.vue'
import Product3 from './components/Product3.vue'
// add more imports for other product components

const routes = [´
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
