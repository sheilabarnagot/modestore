<template>
  <div>
    <MovieAuto
      movieSrc="/mixkit-fashion-model-sits-posing-with-white-background-9100-large.mp4"
    />

    <div class="carousel-container">
      <Carousel id="test" :images="carouselImages" />
    </div>

    <!-- <GridImg :images="gridImages" /> -->
  </div>
</template>

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
            src: 'img1200/pk-paris/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          }
        ]
      }
    }
  }
</script>

<style></style>
<!--<template>
  <div>

    <MovieAuto movieSrc="/mixkit-fashion-model-sits-posing-with-white-background-9100-large.mp4" /> *ta bort public*

    <div class="carousel-container">
      <Carousel :images="carouselImages" />
    </div>


    <GridImg :images="gridImages" :json-src="products" />
  </div>
</template>

<script>
  import Carousel from '../components/CarouselImg.vue'
  import GridImg from '../components/GridImg.vue'
  import MovieAuto from '../components/MovieAuto.vue'
  import products from '../../public/products.json'

  export default {
    components: {
      MovieAuto,
      Carousel,
      GridImg
    },

    methods: {
      products() {
        products.shirts[0].src
      }
    },
    created: {}, //ladda in json filen och lagra i carouselImages och gridImages
    data() {
      return {
        carouselImages: [
          {
            src: '/img1200/pk-paris-107.jpg',
            alt: 'PK Paris 107'
          }
          // ... other carousel images ...
        ],
        gridImages: [
          {
            src: '/img1200/image-1.jpg',
            alt: 'Image 1'
          }
          // ... other grid images ...
        ]
      }
    }
  }
</script>

<style scoped>
  .home-container {
    /* Set the default styles for the container */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens */
    .home-container {
      flex-direction: row;
    }
  }
  h1 {
    font-family: 'didot';
    color: black;
    font-size: 4em;
  }
</style>
-->
<!--
<script>
  export default {}
</script>

<template>
  <div id="img-container">
    <img src="img1200/billy-aw-campagne/billy-aw-campagne-30.jpg" />
    <div id="inner">
      <h1>Store</h1>
    </div>
  </div>
</template>

<style scoped>
  #img-container {
    /* min-height: 100vh; */
    position: relative;
  }
  #inner {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    right: 25%;
    top: 1%;
  }
  h1 {
    font-family: 'didot';
    color: black;
    font-size: 4em;
  }
  img {
    max-width: 100%;
  }
</style>
 -->
