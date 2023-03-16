<template>
  <nav id="nav-container">
    <ul>
      <li>
        <RouterLink to="/account/help/materials"
          >Material Information</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/">Buying on Bon.com</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/help/delivery"
          >Delivery and Order Status</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/account/help/exchanges"
          >Exchanges and Returns</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/account/help/payment">Payment</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/help/qr">Bon QR</RouterLink>
      </li>
    </ul>
    <RouterView />
  </nav>
</template>
<!--
<script>
  // import { RouterLink, routerView } from 'vue-router'
  import MaterialsComponent from './MaterialsComponent.vue'

  const helpComponents = [
    {
      path: '/help/materials',
      name: 'Materials',
      component: MaterialsComponent,
      props: {}
    },
    {
      path: '/help/another',
      name: 'Another Component',
      component: MaterialsComponent,
      props: {}
    }
  ]

  export default {
    name: 'HelpAccount',
    components: {
      // RouterLink,
      // routerView
    },
    //use the routes option to define your routes
    routes: helpComponents
  }
</script>
-->
<style scoped>
  h2 {
    text-align: center;
    padding-right: 9em;
    padding-bottom: 4em;
    padding-left: 30px;
  }

  #nav-container {
    display: flex;
    justify-content: center;
    padding-left: 30px;
  }

  ul {
    list-style-type: none;
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-left: 30px;
    /* justify-items: center; */
  }

  ul li a {
    font-family: 'jost';
    color: #3c3e3f;
    line-height: 2;
    text-decoration: none;
  }
</style>
