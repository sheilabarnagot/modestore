<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
  <!-- <b-button id="button">
    <RouterLink to="/shopping">{{ $t('navbar.menu') }}</RouterLink>
  </b-button> -->

  <h3>Order Confirmation</h3>

  <div class="container">
    <div class="bk" v-for="item in shoppingCartItems" :key="item.id">
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
  #button {
    position: absolute;
    display: flex;
    /* justify-content: center; */

    border-bottom: solid 3px;
    margin-top: 10px;
  }
  .container {
    display: flex;
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    padding: 180px;
    border-radius: 10px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  .amout {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 500px;
  }

  .image {
    width: 90px;
    display: flex;
    margin: 10px;
    box-shadow: 40px 0px 40px 4px grey;
    margin: 1rem;
    padding: 1rem;
  }

  h3 {
    justify-content: center;
    color: #464343;
    opacity: 0.7;
    display: flex;
    margin-bottom: 45px;
    margin-top: 20px;
  }
  .name {
    font-size: small;
    font-size: 10px;
    margin-left: 50px;
  }

  .quantity {
    font-size: small;
    font-size: 10px;
    margin-left: 40px;
  }

  .price {
    font-size: small;
    font-size: 10px;
    margin-left: 37px;
  }
</style>
