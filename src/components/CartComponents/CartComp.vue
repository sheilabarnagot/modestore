<template>
  <div>
<<<<<<< HEAD
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="() => $emit('fromcartcomp', product.name)">
          Add to cart
        </button>
      </li>
    </ul>
=======
    <h2>Cart</h2>
    <div>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
>>>>>>> f5f14dc6bd37b237a636a5fd002fc9403c1f7a80
  </div>
</template>

<script>
<<<<<<< HEAD
  import productsData from '../../../products.json'
  export default {
    emits: ['fromcartcomp'],
    components: {},
    data() {
      return {
        products: productsData
      }
    },
    methods: {}
=======
  export default {
    props: {
      cartItems: {
        type: Array,
        required: true
      }
    }
>>>>>>> f5f14dc6bd37b237a636a5fd002fc9403c1f7a80
  }
</script>
