import { createRouter, createWebHashHistory } from 'vue-router'

<<<<<<< HEAD
import Cart from './views/Cart.vue'
import Shopping from './views/Shopping.vue'
import Cart from './views/Cart.vue'

=======
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
>>>>>>> a489872e1889e72682dfc5b2821670f05a9deb36
import AccountView from './views/AccountView.vue'
import BetalningComponent from './components/BetalningComponent.vue'
import MyAccountComp from './components/MyAccount/MyAccountComp.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
<<<<<<< HEAD
      component: Cart,
      path: '/cart',
      props: { cartitem: [] }
    },
    {
      component: Shopping,
      path: '/shopping',
      props: { products: [] }
=======
      component: HomeView,
      path: '/'
    },
    {
      component: CartView,
      path: '/cart'
>>>>>>> a489872e1889e72682dfc5b2821670f05a9deb36
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
