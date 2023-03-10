<template>
  <div>
    <form @submit="filterProducts" action="">
      <input type="text" v-model="searchTerm" />
      <input type="submit" value="tester" />
    </form>
    <button @click="test">test me</button>
    <div v-for="(product, index) in filteredProducts" :key="index">
      <h3>{{ product.name }}</h3>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.fetchData()
    },
    data() {
      return {
        searchTerm: '',
        products: [],
        filteredProducts: [],
        reactiveProductList: null
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
        // this.filterProducts()
      },
      filterProducts(event) {
        event.preventDefault()

        this.reactiveProductList = this.products.filter((entry) =>
          Object.keys(entry).some((key) =>
            ('' + entry[key])
              .toLowerCase()
              .includes(this.searchTerm.toLocaleLowerCase())
          )
        )
        console.log(this.reactiveProductList)
      }
    }
  }
</script>
