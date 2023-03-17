<template>
  <!-- <b-button id="button">
    <RouterLink to="/shopping">{{ $t('navbar.menu') }}</RouterLink>
  </b-button> -->
  <div class="container">
    <h3>Order Confirmation</h3>
    <div v-for="item in shoppingCartItems" :key="item.id">
      <img class="image" :src="item.src" alt="product image" />

      <div class="name">
        <p>{{ item.name }}</p>
      </div>
      <div class="quantity">
        <p>Quantity: {{ item.quantity }}</p>
      </div>
      <div class="price">
        <p>Price: {{ item.price }} Kr</p>
      </div>
    </div>

    <div class="amout">Total amount: {{ $store.state.totalCost }} Kr</div>

    <!-- {{ $store.state.basketItem }} -->

    <!-- {{ $store.state.cardowner }} -->
    <!-- {{ this.$store.state.item }}
    {{ $store.state.item.product }} -->
    <!-- </div>
  <div v-for="(item, i) in items" :key="i">
    <img :src="item.url" :alt="item.name" title="Order Now!" />

    <section>{{ item.name }}</section>
  </div> -->
  </div>
</template>

<script>
  export default {
    computed: {
      shoppingCartItems() {
        return this.$store.getters.shoppingCartItems
      },
      computed() {
        return {
          name: ''
        }
      }
    },

    methods: {
      submitForm() {
        this.$store.commit('setName', this.name)
        this.name = ''
      }
    }
  }
</script>

<style scoped>
  .container {
    font-family: 'didot', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border-radius: 10px;
    height: 100vh;
  }
  .amout {
    justify-content: center;
    color: #464343;
  }

  .image {
    justify-content: center;
    width: 100px;
    top: 600px;
  }

  h3 {
    color: #464343;
    opacity: 0.8;
    border-bottom: 3px solid #464343;
    text-align: center;
    margin-top: 105px;
  }
  .name {
    font-size: 12px;
    margin-left: 40px;
  }

  .quantity {
    font-size: 12px;
    margin-left: 25px;
  }

  .price {
    color: #464343;
    font-size: 12px;
    margin-left: 20px;
  }
  @media screen and (min-width: 400px) {
    .container {
      display: flex;
      flex-direction: column;
    }
  }
</style>
