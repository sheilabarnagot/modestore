<!-- Here we are looping through and displaying the products in the shoppingcart. We are also placing a button next to each product that when clicked will delete it from the cart. -->
<template>
  <div class="container">
    <h2 id="cartsh2">Cart</h2>
    <button id="paybutton">
      <RouterLink to="/kop">{{ $t('navbar.köp') }}</RouterLink>
    </button>
    <p id="totalamount">{{ $store.state.totalCost }} kr</p>
    <div id="cartdiv">
      <div v-for="item in visibleItems" :key="item.id">
        <p class="top-p">{{ item.name }}</p>
        <p class="bottom-p">{{ item.product }}</p>
        <img :src="`${item.src}`" alt="product image" />
        <p>{{ item.price }}</p>
        <button id="decrease" @click="() => decreaseQuantity(item)">-</button>
        <span>{{ item.quantity }}</span>
        <button id="increase" @click="() => increaseItems(item)">+</button>
        <button id="delete" @click="() => deleteItem(item)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      storedShoppingItems() {
        return this.$store.state.items
      },
      visibleItems() {
        return this.storedShoppingItems.filter((item) => !item.isClicked)
      }
    },
    methods: {
      deleteItem(item) {
        this.$store.commit('setClicked', item)
        this.$store.commit('deleteItem', item)

        console.log(typeof this.visibleItems)
        console.log('visible', this.visibleItems)
        console.log(item.id)
        console.log(this.storedShoppingItems)
      },
      increaseItems(item) {
        this.$store.commit('basketItem', item)
      },
      decreaseQuantity(item) {
        this.$store.commit('decreaseQuantity', item)
      }
    }
  }
</script>
<style scoped>
  .container {
    margin-bottom: 6em;
  }
  #delete {
    background-color: red;
    border-radius: 15px;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    display: block;
    margin-top: 3px;
  }
  #delete:hover {
    background-color: #9c3f17;
  }
  img {
    max-width: 50%;
    box-shadow: 50px 0px 50px 5px grey;
  }
  #cartsh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: 'Gloock', serif;
  }
  #cartdiv {
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .top-p {
    margin-top: 14px;
    margin-bottom: 0;
    font-family: 'Gloock', serif;
  }
  .bottom-p {
    margin-bottom: 0;
  }
  #paybutton a {
    text-decoration: none;

    color: black;
  }
  #paybutton {
    background-color: greenyellow;
    float: right;
    margin-right: 100px;
    border-radius: 10px;
  }
  #totalamount {
    float: right;
  }
</style>
