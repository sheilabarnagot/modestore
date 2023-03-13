<!--KZ making a image carousel for the first page-->
<template>
  <div class="slide-container">
    <h2>{{ slideTitle }}</h2>
    <b-carousel class="img-slide" v-model="slide" controls indicators>
      <b-carousel-slide img-src="/img1200/sva/sva-studio-125.jpg" />
      <b-carousel-slide img-src="/img1200/sva/sva-studio-120.jpg" />
      <b-carousel-slide img-src="/img1200/sva/sva-studio-122.jpg" />
      <b-carousel-slide img-src="/img1200/sva/sva-studio-124.jpg" />
      <b-carousel-slide img-src="/img1200/sva/sva-studio-121.jpg" />
      <b-carousel-slide img-src="/img1200/sva/sva-studio-123.jpg" />
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0
      }
    },
    props: {
      slideTitle: {
        type: String,
        default: 'Studio'
      }
    }
    /*
      methods: {
      stopAutoplay() {
        this.$refs.carousel.pause()
      },
      startAutoplay() {
        this.$refs.carousel.start()
      }
    }*/
  }
</script>

<style scoped>
  .slide-container {
    margin: 30px;
  }

  h2 {
    margin-left: 10px;
    color: #353337;
    opacity: 0.9;
  }
</style>

<!--
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <img
          :src="`/img1200${image.src}`"
          :alt="image.alt"
          class="carousel-images"
        />
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>

  * more pic for the carousel:
  <b-carousel-slide img-src="/img1200/fuc/fuc-glam-83.jpg" />
    <b-carousel-slide img-src="/img1200/fuc/fuc-paris-61.jpg" />
    <b-carousel-slide img-src="/img1200/fuc/fuc-paris-66.jpg" />
    <b-carousel-slide img-src="/img1200/fuc/fuc-studios-73.jpg" />
    <b-carousel-slide img-src="/img1200/punk/punk-look-171.jpg" />
    <b-carousel-slide img-src="/img1200/punk/punk-look-178.jpg" />

</template>

<script>
  import 'swiper/css'
  import Swiper from 'swiper'
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    mounted() {
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
    }
  }

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
  .swiper-slide {
    /* Set the default styles for the slide */
    display: flex;
    justify-content: center;
    align-items: center;
    /*width: 100%;*/
    height: 50vh;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens */
    .swiper-slide {
      height: 70vh;
    }
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
-->
