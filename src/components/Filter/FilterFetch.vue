<template>
  <div id="input-container">
    <form @submit="filterProducts" action="">
      <template v-if="toggls">
        <input type="text" v-model="searchTerm" placeholder="Search" />
        <input class="search" type="submit" value="Search" />
      </template>
    </form>
  </div>
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
        this.toggls = !this.toggls
      }
    }
  }
</script>

<style scoped>
  #input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 200%;
    position: absolute;
    z-index: 999;
  }

  .search {
    margin: 10px;
    border-radius: 10px;
    padding: 5px;
  }

  input {
    border-radius: 15px;
    background-color: #d7dad8;
    margin: 10px;
    padding: 5px;
  }

  @media (min-width: 600px) {
    #input-container {
      top: 10%;

      /* bottom: 50%; */
      left: 39%;
    }
  }
  @media (min-width: 990px) {
    #input-container {
      top: 7%;
      position: fixed;
      /* bottom: 50%; */
      left: 40%;
    }
  }
  @media (min-width: 1024px) {
    #input-container {
      top: 7%;
      position: fixed;
      /* bottom: 50%; */
      left: 65%;
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
