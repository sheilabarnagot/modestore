<template>
  <h1>Products</h1>
  <div>
    <template v-for="item in allProducts" :key="item.id">
      <img :src="item.src" alt="" />
    </template>
  </div>
</template>

<script>
  export default {
    created() {
      this.fetchAllProducts()
    },
    data() {
      return {
        allProducts: null
      }
    },
    methods: {
      async fetchAllProducts() {
        const response = await fetch('/allProducts.json')
        const result = await response.json()
        this.allProducts = result
        console.log(result)
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    justify-items: center;
  }

  img {
    max-width: 90%;
  }
</style>
