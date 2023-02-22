<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="hej">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import productsData from '../../products.json'
  export default {
    emits: ['addtocart'],
    data() {
      return {
        products: productsData
      }
    },
    methods: {
      hej() {
        this.$emit('addtocart', this.product)
      }
    }
  }
</script>
