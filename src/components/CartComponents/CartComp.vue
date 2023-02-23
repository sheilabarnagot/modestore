<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="() => $emit('fromcartcomp', product.name, product.id)">
          Add to cart
        </button>
        {{ product.id }}
      </li>
    </ul>

    <h2>Cart</h2>
    <div>
      {{ $store.state.items }}
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
