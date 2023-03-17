<template>
  <div id="arrow-back">
    <ArrowBack @click="() => this.$router.go(-1)" />
  </div>
  <div id="container">
    <div id="product-information">
      <div id="product-name-product">
        <p>{{ $route.params.name }}, {{ $route.params.product }}</p>
        <p id="p-price">price: {{ $route.params.price }} kr</p>
      </div>
    </div>
    <img :src="src" />
  </div>
</template>

<script>
  import ArrowBack from '../SvgIcons/ArrowBack.vue'

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
    components: {
      ArrowBack
    },
    data() {
      return {
        src: null
      }
    },
    methods: {
      fetchData() {
        this.src = this.$route.params.id.replaceAll(',', '/')
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    align-items: center;
  }

  #product-information {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
  }

  #product-name-product {
    display: flex;
    flex-direction: column;
    padding-left: 0.3em;
  }

  h1 {
    text-align: center;
    margin-top: 1em;
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

  #arrow-back {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  p {
    font-family: jost;
    margin-bottom: 0;
  }

  img {
    max-width: 60%;
    object-fit: contain;
  }

  @media (min-width: 500px) {
    img {
      max-width: 50%;
    }
  }

  @media (min-width: 768px) {
    img {
      max-width: 30%;
    }

    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
    }

    #product-name-product {
      padding-bottom: 0.5em;
    }
  }
</style>
