<!--KZ updated Home new carousel with boutstrapvuenext instead of swiper-->
<template>
  <div>
    <CarouselImg />
    <MovieAuto
      movieSrc="/mixkit-fashion-model-sits-posing-with-white-background-9100-large.mp4"
    />
    <!--
         :images="[
        {
          src: '/img1200/pk-paris/pk-paris-107.jpg',
          alt: 'PK Paris 107'
        }
      ]"
    <CarouselImg
      src="/img1200/pk-paris/pk-paris-107.jpg"
      alt="PK Paris 107"
    />-->
    <!-- <GridImg :images="gridImages" /> -->
  </div>
</template>

<script>
  import MovieAuto from '../components/HomeComponents/MovieAuto.vue'
  import CarouselImg from '../components/HomeComponents/CarouselImg.vue'

  export default {
    name: 'HomeView',
    components: {
      MovieAuto,
      CarouselImg
    },
    data() {
      return {
        carouselImages: [
          {
            src: '/img1200/pk-paris/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          }
        ]
      }
    }
  }
</script>

<!--
<script>
  import Carousel from '../components/HomeComponents/CarouselImg.vue'
  import MovieAuto from '../components/Homecomponents/MovieAuto.vue'

  export default {
    components: {
      Carousel,
      MovieAuto
    },
    data() {
      return {
        carouselImages: [
          {
            src: '/assets/img1200/pk-paris/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          }
        ]
      }
    }
  }
</script>
-->
<style>
  .container {
    height: 100vh;
  }
</style>
<!--
<style>
  .swiper-container {
    width: 100%;
    /*height: 70vh;*/
    overflow: hidden;
    margin: 20px;
  }
  @media screen and (max-width: 767px) {
    .movie-auto,
    .carousel-img {
      height: 100vh;
    }
  }
</style>
-->
