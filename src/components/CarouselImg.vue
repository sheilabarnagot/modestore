<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in Products" :key="index">
        <router-link :to="image.link">
          <img :src="image.name" :alt="image.alt" />
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script>
  import Swiper from 'swiper/bundle'
  import Products from '../../public/products.json'

  export default {
    data() {
      return {
        images: Products,
        swiper: null
      }
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      })
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
