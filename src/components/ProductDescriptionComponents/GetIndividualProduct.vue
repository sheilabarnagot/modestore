<template>
  <h1>Product Details</h1>
  <div id="container">
    <img :src="dettur" />
    <div id="product-information">
      <div id="product-name-product">
        <p>{{ $route.params.name }}, {{ $route.params.product }}</p>
        <p id="p-price">price: {{ $route.params.price }} kr</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    components: {},
    data() {
      return {
        dettur: null
      }
    },
    methods: {
      fetchData() {
        this.dettur = this.$route.params.id.replaceAll(',', '/')
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 2em;
    height: 90vh;
  }

  #product-information {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: 1.2em;
    /* padding-left: 1em; */
  }

  #product-name-product {
    display: flex;
    flex-direction: column;
    padding-left: 0.3em;
  }

  h1 {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;

    position: absolute;
    top: 15%;
  }
  #p-price {
    text-align: center;
    width: 100%;
  }

  p {
    font-family: jost;
    margin-bottom: 0;
  }

  img {
    max-width: 60%;
    object-fit: contain;
  }
</style>
