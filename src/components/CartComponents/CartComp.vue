<template>
  <div>
    <ShoppingView @add-to-cart="addToCart" />
    <CartView :cartItems="cartItems" />
  </div>
</template>

<script>
  import ShoppingView from '../../views/Shopping.vue'
  import CartView from '../../views/Cart.vue'

  export default {
    components: { ShoppingView, CartView },
    data() {
      return {
        cartItems: []
      }
    },
    methods: {
      addToCart(product) {
        this.cartItems.push(product)
      }
    }
  }
</script>
