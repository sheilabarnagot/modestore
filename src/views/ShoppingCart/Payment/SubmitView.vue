<template>
  <button id="button">
    <RouterLink to="/shopping">{{ $t('navbar.menu') }}</RouterLink>
  </button>

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
    /* position: absolute; */
    /* flex-direction: column; */
    /* width: 100px; */
    width: 10000px;
    background-color: #dcc5b9;
    /* margin: auto auto; */
    margin-bottom: 30vh;
    padding: 180px;
    border-radius: 15px;
    box-sizing: border-box;
    height: 1000px;
  }
  .amout {
    position: absolute;
    margin-top: 450px;
    padding-left: 40px;
    display: flex;
  }
  .bk {
    /* padding-left: 80px; */
  }

  .image {
    width: 70px;
    display: flex;
    margin: 10px;
    box-shadow: 50px 0px 50px 5px grey;
  }

  h3 {
    justify-content: center;

    display: flex;
    margin-bottom: 50px;
    margin-top: 20px;
  }
  .name {
    font-size: small;
    font-size: 10px;
    margin-left: 30px;
  }

  .quantity {
    font-size: small;
    font-size: 10px;
    margin-left: 20px;
  }

  .price {
    font-size: small;
    font-size: 10px;
    margin-left: 20px;
  }
</style>
