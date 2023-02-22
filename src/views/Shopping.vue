<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="$emit('add-to-cart', product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import productsData from '../../products.json'
  export default {
    data() {
      return {
        products: productsData
      }
    }
  }
</script>
