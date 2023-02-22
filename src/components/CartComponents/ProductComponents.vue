<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="addToCart(product)">Add to cart</button>
      </li>
    </ul>
    <Cart :cart-items="cartItem" />
  </div>
</template>
<script>
  import Cart from './CartComp.vue'
  import productsData from '../../../products.json'
  export default {
    components: { Cart },
    data() {
      return {
        products: productsData,
        cartItem: []
      }
    },
    methods: {
      addToCart(product) {
        this.cartItem.push(product)
        console.log(this.cartItem)
      }
    }
  }
</script>
