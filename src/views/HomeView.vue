<!--KZ updated Home new carousel with boutstrapvuenext instead of swiper-->
<template>
  <h1 class="bonnie">BONIE</h1>
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
    <!--  <mood-board :images="images" />

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
            src: '/img1200/pk-paris/pk-paris-100.jpg',
            alt: 'PK Paris 100'
          },
          {
            src: '/img1200/pk-paris/pk-paris-106.jpg',
            alt: 'PK Paris 106'
          },
          {
            src: '/img1200/pk-paris/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          },
          {
            src: '/img1200/pk-paris/pk-paris-104.jpg',
            alt: 'PK Paris 104'
          },
          {
            src: '/img1200/pk-paris/pk-paris-108.jpg',
            alt: 'PK Paris 108'
          },
          {
            src: '/img1200/pk-paris/pk-paris-102.jpg',
            alt: 'PK Paris 102'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .bonnie {
    color: #47413d;
    position: absolute;
    margin: 50px 40px;
    font-size: 2.5rem;
  }

  @media (min-width: 601px) {
    .bonnie {
      position: absolute;
      margin: 40px 100px;
      font-size: 3.5rem;
    }
  }
  @media (min-width: 768px) {
    .bonnie {
      position: absolute;
      margin: 40px 100px;
      font-size: 4rem;
    }
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
