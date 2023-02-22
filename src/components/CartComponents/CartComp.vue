<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="() => $emit('fromcartcomp', product.name)">
          Add to cart
        </button>
      </li>
    </ul>

    <h2>Cart</h2>
    <div>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
  }
</script>
