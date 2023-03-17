<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->DeliveryComponent
-->

<!--
  todo: Create orderStatus in vuex. It doesn't seem to exists.
 -->

<template>
  <div>
    <h2 class="delivery-methods__heading">Delivery Methods</h2>
    <ul class="delivery-methods__list">
      <li
        v-for="method in deliveryMethods"
        :key="method.id"
        class="delivery-methods__item"
      >
        <div class="delivery-methods__name">{{ method.name }}</div>
        <div class="delivery-methods__description">
          {{ method.description }}
        </div>
        <div class="delivery-methods__price">{{ method.price }} kr</div>
      </li>
    </ul>
    <h2 class="order-status__heading">Order Status</h2>
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
    // }  #eeece5
  }
</script>

<style scoped>
  .delivery-methods__heading {
    font-size: 1.2rem;
    margin: 150px 40px 10px;
    color: #47413d;
  }

  .delivery-methods__list {
    list-style: none;
    padding: 10px 40px;
    left: 10px;
    color: #47413d;
  }

  .delivery-methods__item {
    border-bottom: 1px solid #818c85;
    margin-bottom: 10px;
    padding-bottom: 10px;
    color: #47413d;
  }

  .delivery-methods__name {
    font-size: 1rem;
    font-weight: light;
    margin-bottom: 0.8rem;
    color: #47413d;
  }

  .delivery-methods__description {
    font-family: jost;
    font-size: 1rempx;
    margin-bottom: 5px;
    color: #47413d;
  }

  .delivery-methods__price {
    font-family: jost;
    font-size: 1rem;
    color: #47413d;
  }

  .order-status__heading {
    font-size: 1rem;
    margin: 20px 10px 10px 40px;
    color: #47413d;
  }
</style>
