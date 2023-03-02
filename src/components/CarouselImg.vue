<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <!-- <RouterLink to="carousel" />-->
        <img :src="image.src" :alt="image.alt" />
        <!-- {{ image.src }} -->
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    }
  }
  new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000 // Change image every 5 seconds
    },
    touchEventsTarget: 'wrapper', // Listen for touch events on the wrapper element
    on: {
      // Listen for user interaction events
      touchStart: function () {
        // Stop autoplay when user interacts with carousel
        this.autoplay.stop()
      },
      touchEnd: function () {
        // Resume autoplay when user stops interacting with carousel
        this.autoplay.start()
      },
      slideChangeTransitionEnd: function () {
        // Reset autoplay timer after slide change
        this.autoplay.start()
      },
      // Listen for inactivity and trigger automatic slide change
      init: function () {
        const swiper = this
        let timer = null
        swiper.autoplay.start()
        swiper.$el.addEventListener('mouseenter', () => {
          clearTimeout(timer)
          swiper.autoplay.stop()
        })
        swiper.$el.addEventListener('mouseleave', () => {
          timer = setTimeout(() => {
            swiper.slideNext()
          }, 3000) // Change image after 3 seconds of inactivity
          swiper.autoplay.start()
        })
      }
    }
    // Add other options here
  })
  // props: [data]  //aktivera denna för att ta emot bilderna från HomeView.vue och kommentera bort data nedanför

  /* data() {
          return {
            images: [
              {
                src: '/img1200/pk-paris/pk-paris-107.jpg',
                alt: 'PK Paris 107'
              },
              {
                src: '/img1200/punk/punk-look-107.jpg',
                alt: 'Punk Look 107'
              },
              {
                src: '/img1200/sva/sva-studio-122.jpg',
                alt: 'SVA Studio 122'
              },
              {
                src: '/img1200/sva/sva-studio-125.jpg',
                alt: 'SVA Studio 125'
              },
              {
                src: '/img1200/billy-ss-campagne-21.jpg',
                alt: 'Billy SS Campagne 21'
              }
            ]
          }
        }*/
</script>
<style scoped>
  @import 'swiper/css/swiper.css';
  .swiper-slide {
    /* Set the default styles for the slide */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens */
    .swiper-slide {
      height: 70vh;
    }
  }
</style>

<!--
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
-->
