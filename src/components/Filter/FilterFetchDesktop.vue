<template>
  <form @submit="filterProduct" action="">
    <input type="text" v-model="searchTerm" placeholder="Search" />

    <!-- <input class="search" type="submit" value="Search" /> -->
  </form>
</template>

<script>
  import levenshtein from 'fast-levenshtein'
  export default {
    created() {
      this.fetchData()
    },
    data() {
      return {
        searchTerm: '',
        products: null,

        reactiveProductList: null,
        //ney kod:
        //   name: '',
        //   image: ''

        toggls: true
        //En ny kod:
        // Target: [
        //   {
        //     category: '',
        //     color: '',
        //     name: '',
        //     price: '',
        //     src: ''
        //   }
        // ]
      }
    },
    emits: ['filterproducts'],
    // async mounted() {
    //   await this.fetchData()
    // },
    methods: {
      async fetchData() {
        const response = await fetch('../../assets/products.json')
        const result = await response.json()
        this.products = result.productpics
        // this.filterProducts()
      },
      filterProduct(event) {
        event.preventDefault()

        // stackoverflow and chapgpt
        const array = this.products.filter((entry) =>
          Object.keys(entry).some((key) => {
            const entryValue = String(entry[key]).toLowerCase()
            const searchTerm = this.searchTerm.toLocaleLowerCase()
            const distance = levenshtein.get(entryValue, searchTerm)
            const similarity =
              1 - distance / Math.max(entryValue.length, searchTerm.length)

            return similarity >= 0.5 //
          })
        )

        this.$emit('filterproducts', array)
        this.searchTerm = ''
      }
    }
  }
</script>

<style scoped>
  input {
    outline: 0;
    position: absolute;
    right: 100%;
    border-width: 0 0 2px;
    background: transparent;
    border-top: none;
    border-bottom: 2px solid black;
  }

  @media (max-width: 690px) {
    input {
      width: 30%;
    }
  }
</style>

<!-- <form @submit="filterProducts">
        <input type="text" v-model="searchTerm" />
        <input type="submit" value="Search" />
      </form> -->
<!-- <button @click="test">test me</button>
    <div v-for="(product, index) in filteredProducts" :key="index">
      <h3>{{ product.name }}</h3>
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.description }}</p>
    </div> -->
<!-- <div :key="product.id" v-for="product in products" /> -->
<!-- <img src="searchedItems.src" allt="" /> -->
<!-- <div v-if="searchTerm && products().length">></div> -->
