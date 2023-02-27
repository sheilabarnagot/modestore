<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <RouterLink to="carousel" />
        <img :src="image.src" :alt="image.alt" />
        {{ image.src }}
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
  test
</template>

<script>
  //import Swiper from 'swiper/bundle'

  export default {
    created() {
      this.fetchJsonData()
    },
    data() {
      return {
        images: null,
        swiper: null
      }
    },
    methods: {
      async fetchJsonData() {
        const response = await fetch('/products.json')
        const result = await response.json()
        this.images = result
        console.log(result)
      }
    },
    beforeUnmount() {
      if (this.swiper) {
        this.swiper.destroy()
      }
    }
  }
</script>

<style scoped>
  .carousel {
    /* Style the carousel container */
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;
  }

  .carousel img {
    /* Style the carousel images */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .carousel img.active {
    /* Show the active image */
    opacity: 1;
  }
</style>
