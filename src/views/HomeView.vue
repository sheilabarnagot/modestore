<!--KZ updated Home new carousel with boutstrapvuenext instead of swiper-->
<template>
  <h1 class="bonnie">MODESTORE</h1>
  <div>
    <MovieAuto movieSrc="/pexels-cottonbro-5836750.mp4" />
    <CarouselImg />
    <GridImg
      :images="galleryImages"
      :columnsXs="2"
      :columnsSm="3"
      :columnsMd="4"
      :columnsLg="5"
      :columnsXl="6"
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
  import GridImg from '../components/HomeComponents/GridImg.vue'

  export default {
    name: 'HomeView',
    components: {
      MovieAuto,
      CarouselImg,
      GridImg
    },
    data() {
      return {
        galleryImages: [
          {
            src: '/img1200/pk-paris/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          },
          {
            src: '/img1200/pk-paris/pk-paris-108.jpg',
            alt: 'PK Paris 108'
          },
          /* {
            src: '/img1200/pk-paris/pk-paris-104.jpg',
            alt: 'PK Paris 104'
          },*/
          {
            src: '/img1200/pk-paris/pk-paris-102.jpg',
            alt: 'PK Paris 102'
          },
          {
            src: '/img1200/pk-paris/pk-paris-106.jpg',
            alt: 'PK Paris 106'
          },
          {
            src: '/img1200/pk-paris/pk-paris-100.jpg',
            alt: 'PK Paris 100'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .bonnie {
    color: #585049;

    position: absolute;
    margin: 50px 30px;
  }
</style>

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

<!--KZ testar olika styling
<style>
  .container {
    height: 100vh;
  }
</style>
-->

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
