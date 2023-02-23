import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
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
