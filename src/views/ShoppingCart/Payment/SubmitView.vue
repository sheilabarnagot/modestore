<template>
  <!-- <form @submit.prevent="submitForm">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form> -->
  <!-- <b-button id="button">
    <RouterLink to="/shopping">{{ $t('navbar.menu') }}</RouterLink>
  </b-button> -->
  <div class="h3">
    <h3>Order Confirmation</h3>
  </div>

  <div class="container">
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
  /* #button {
    position: absolute;
    display: flex;
    border-bottom: solid 3px;
    margin-top: 10px;
  } */
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    background-color: #eeece5;
    /* padding: 180px; */
    border-radius: 10px;
    box-sizing: border-box;
    height: 100vh;
    margin: 10 auto;
    padding: 1rem;
  }
  .amout {
    position: absolute;

    justify-content: center;
    /* width: 100%; */
    top: 600px;
  }

  .image {
    width: 100px;

    top: 600px;

    /* margin: 10px; */
    box-shadow: 20px 0px 30px 2px grey;
    /* margin: 1rem; */
    /* padding: 1rem; */
  }

  h3 {
    justify-content: center;
    color: #464343;
    opacity: 0.8;

    /* margin-bottom: 60px;
    margin-top: 20px; */
  }
  .name {
    font-size: small;
    font-size: 12px;
    margin-left: 50px;
  }

  .quantity {
    font-size: small;
    font-size: 12px;
    margin-left: 40px;
  }

  .price {
    font-size: small;
    font-size: 12px;
    margin-left: 37px;
  }
  @media screen and (min-width: 400px) {
    .container {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .h3 {
      display: flex;
    }
  }
  @media screen and (min-width: 800px) {
    .container {
      margin-bottom: 6em;
      padding-left: 2rem;
      display: row;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3em;
      font-family: 'didot', sans-serif;
    }
  }
</style>
