<template>
  <div>
    <!-- <ShoppingView @addtocart="addToCart" /> -->
    <!-- <CartView :cartItems="cartItems" />
    -->
    <button>klick</button>
    {{ product }}
  </div>
</template>

<script>
  // import CartView from '../../views/CartView.vue'

  export default {
    created() {
      this.product
    },
    components: {},
    // CartView
    props: {
      product: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        cartItems: this.product
      }
    },
    methods: {
      addToCart(product) {
        this.cartItems.push(product)
      }
    }
  }
</script>
