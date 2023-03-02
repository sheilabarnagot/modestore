<template>
  <div>
    <!-- Movie component -->
    <MovieAuto />

    <!-- Carousel component -->
    <div class="carousel-container">
      <carousel :images="carouselImages" />
    </div>

    <!-- Grid of images using GridImg component -->
    <GridImg :images="gridImages" />
  </div>
</template>

<script>
  import Carousel from '../components/CarouselImg.vue'
  import GridImg from '../components/GridImg.vue'
  import MovieAuto from '../components/MovieAuto.vue'

  export default {
    components: {
      MovieAuto,
      Carousel,
      GridImg
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
  .carousel-container {
    max-width: 600px;
    margin: 0 auto;
  }
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

<!--
<script>
  export default {}
</script>

<template>
  <div id="img-container">
    <img src="/img1200/toneintone-grey-id-6.jpg" />
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
