<template>
  <div id="container">
    <img :src="dettur" />
    <div id="product-information">
      <div id="product-name-product">
        <p>{{ $route.params.name }}, {{ $route.params.product }}</p>
      </div>
      <p id="p-price">{{ $route.params.price }} kr</p>
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
    /* flex-direction: column; */
    height: 100vh;
  }

  #product-information {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding-left: 1em;
  }

  #product-name-product {
    display: flex;
  }

  #p-price {
    text-align: center;
    width: 100%;
  }

  p {
    font-family: jost;
  }

  img {
    max-width: 60%;
    object-fit: contain;
  }
</style>
