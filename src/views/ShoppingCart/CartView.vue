<!-- Here we are looping through and displaying the products in the shoppingcart. We are also placing a button next to each product that when clicked will delete it from the cart. -->

<template>
  <h2 id="cartsh2">Cart</h2>
  <RouterLink to="/kop"
    ><button id="checkout-button">To checkout</button>
  </RouterLink>
  <p id="totalamount">Total amount: {{ $store.state.totalCost }} kr</p>
  <div class="container">
    <div id="cart-div-grid" v-for="item in visibleItems" :key="item.id">
      <img :src="`${item.src}`" alt="product image" />
      <p class="top-p">{{ item.product }} {{ item.name }}</p>

      <p class="bottom-p">Price: {{ item.price }} kr</p>
      <div id="change-amount">
        <i
          class="bi bi-dash-circle-fill"
          @click="() => decreaseQuantity(item)"
        />
        <span>{{ item.quantity }}</span>
        <i class="bi bi-plus-circle-fill" @click="() => increaseItems(item)" />
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
  #checkout-button {
    position: absolute;
    margin-left: 75%;
    top: 70px;
    background-color: #3c3e3f;
    color: white;
    font-size: 0.8em;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
  }
  #totalamount {
    font-family: 'didot', sans-serif;
    margin-left: 75%;
    position: absolute;
    line-height: 1;
    max-width: 13ch;
    top: 125px;
  }
  .container {
    margin-bottom: 6em;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    font-family: 'didot', serif;
    margin-top: 40px;
  }
  #delete {
    width: 100%;
    background-color: #3c3e3f;
    color: #fff;
    font-size: 0.8em;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    margin-top: 3px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: 'didot', sans-serif;
  }
  #delete:hover {
    background-color: #818c85;
  }
  img {
    max-width: 100%;
  }
  #cartsh2 {
    margin-left: 46%;
    margin-top: 120px;
    font-family: 'Gloock', sans-serif;
  }

  .top-p {
    margin-top: 14px;
    margin-bottom: 0;
    font-weight: lighter;
    font-family: 'didot', sans-serif;
  }
  .bottom-p {
    margin-bottom: 0;
    font-family: 'didot', sans-serif;
  }
  #paybutton a {
    text-decoration: none;
    color: #3c3e3f;
  }
  #paybutton:hover {
    fill: #818c85;
  }
  #paybutton {
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 2px;
  }

  #amountdiv {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  .bi-dash-circle-fill {
    margin-right: 5px;
    font-size: 1.5rem;
    color: #3c3e3f;
    cursor: pointer;
  }
  .bi-plus-circle-fill {
    margin-left: 5px;
    font-size: 1.5rem;
    color: #3c3e3f;
    cursor: pointer;
  }
  #change-amount {
    display: flex;
  }
  #change-amount span {
    margin-top: 5px;
    font-family: 'didot', sans-serif;
  }

  @media screen and (min-width: 600px) {
    #amountdiv {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    #paybutton a {
      text-decoration: none;
      color: #3c3e3f;
    }
  }
  @media screen and (min-width: 800px) {
    .container {
      margin-bottom: 6em;
      padding-left: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1em;
      font-family: 'didot', sans-serif;
    }
  }
</style>
