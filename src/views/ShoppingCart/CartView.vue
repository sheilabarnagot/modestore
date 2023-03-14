<!-- Here we are looping through and displaying the products in the shoppingcart. We are also placing a button next to each product that when clicked will delete it from the cart. -->
<template>
  <div id="head-div">
    <h2 id="cartsh2">Cart</h2>

    <div id="amountdiv">
      <button id="paybutton">
        <RouterLink to="/kop">{{ $t('navbar.köp') }}</RouterLink>
      </button>
      <p id="totalamount">{{ $store.state.totalCost }} kr</p>
    </div>
  </div>

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
  .container {
    margin-bottom: 6em;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    font-family: 'didot', serif;
  }
  #delete {
    background-color: #54161f;
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
    margin-top: 3px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: 'didot', serif;
  }
  #delete:hover {
    background-color: #9c3f17;
  }
  img {
    max-width: 100%;
    box-shadow: 50px 0px 50px 5px grey;
  }
  #cartsh2 {
    margin-left: 50%;
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: 'Gloock', serif;
  }

  .top-p {
    margin-top: 14px;
    margin-bottom: 0;
    font-weight: lighter;
    font-family: 'didot', serif;
  }
  .bottom-p {
    margin-bottom: 0;
    font-family: 'didot', serif;
  }
  #paybutton a {
    text-decoration: none;
    color: #3c3e3f;
  }

  #paybutton {
    background-color: #f2f0e6;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 2px;
  }
  #totalamount {
    float: right;
    align-self: center;
    font-family: 'didot', serif;
    margin-right: 6px;
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
    font-family: 'didot', serif;
  }
  #head-div {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 600px) {
    #paybutton {
      background-color: #f2f0e6;
      float: right;
      margin-right: 10px;
      margin-top: 100px;
      border-radius: 10px;
      padding: 2px;
    }
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
</style>
