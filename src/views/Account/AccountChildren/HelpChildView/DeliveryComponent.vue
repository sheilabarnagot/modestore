<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->DeliveryComponent
-->

<!--
  todo: Create orderStatus in vuex. It doesn't seem to exists.
 -->

<template>
  <div>
    <h2>Delivery Methods</h2>
    <ul>
      <li v-for="method in deliveryMethods" :key="method.id">
        <div>{{ method.name }}</div>
        <div>{{ method.description }}</div>
        <div>{{ method.price }} kr</div>
      </li>
    </ul>
    <h2>Order Status</h2>
    <!-- <div>{{ orderStatus }}</div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        deliveryMethods: [
          {
            id: 1,
            name: 'Standard Delivery',
            description: 'Delivery within 3-5 business days',
            price: 49
          },
          {
            id: 2,
            name: 'Express Delivery',
            description: 'Delivery within 1-2 business days',
            price: 99
          }
        ]
      }
    }
    // computed: {
    //   orderStatus() {
    //     // Get order status from store
    //     return this.$store.state.order.status
    //   }
    // }
  }
</script>
