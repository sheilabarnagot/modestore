<template>
  <div>
    <input type="text" v-model="searchTerm" @input="filterProducts()" />
    <div v-for="(product, index) in filteredProducts" :key="index" />
    <h3>{{ product.name }}</h3>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTerm: '',
        products: [],
        filteredProducts: []
      }
    },
    async mounted() {
      await this.fetchData()
    },
    methods: {
      async fetchData() {
        const response = await fetch('../../assets/products.json')
        const result = await response.json()
        this.products = result.productpics
        this.filterProducts()
      },
      filterProducts() {
        this.filteredProducts = this.products.filter((entry) =>
          Object.keys(entry).some((key) =>
            ('' + entry[key])
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
          )
        )
      }
    }
  }
</script>
