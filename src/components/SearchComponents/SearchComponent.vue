<template>
  <div class="search-wrapper">
    <input type="text" v-model="Search" placeholder="Search" />
    <button @click="filterProducts">Search</button>
  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       searchTerm: '',
  //       products: [],
  //       filteredProducts: []
  //     }
  //   },
  //   async mounted() {
  //     await this.fetchData()
  //   },
  //   methods: {
  //     async fetchData() {
  //       const response = await fetch('../../assets/products.json')
  //       const result = await response.json()
  //       this.products = result.productpics
  //       this.filterProducts()
  //     },
  //     filterProducts(event) {
  //       console.log(event)

<<<<<<< HEAD
  //       return (this.filteredProducts = this.products.filter((entry) =>
=======
  //       return this.filteredProducts = this.products.filter((entry) =>
>>>>>>> 2c5072abf002ed48b6ae03b9b98a77ad99a798bd
  //         Object.keys(entry).some((key) =>
  //           ('' + entry[key])
  //             .toLowerCase()
  //             .includes(this.searchTerm.toLowerCase())
  //         )
<<<<<<< HEAD
  //       ))
=======
  //       )
>>>>>>> 2c5072abf002ed48b6ae03b9b98a77ad99a798bd
  //     }
  //   }
  // }
</script>
