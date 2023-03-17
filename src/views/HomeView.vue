<!--KZ updated Home new carousel with boutstrapvuenext instead of swiper-->
<template>
  <div>
    <MovieAuto movieSrc="/pexels-cottonbro-5836750.mp4" />
    <CarouselImg />
    <GridImg :images="galleryImages" :columnsXs="2" :columnsSm="3" />
    <CampagneImg :images="campagneImages" />
  </div>
</template>

<script>
  import MovieAuto from '../components/HomeComponents/MovieAuto.vue'
  import CarouselImg from '../components/HomeComponents/CarouselImg.vue'
  import GridImg from '../components/HomeComponents/GridImg.vue'
  import CampagneImg from '../components/HomeComponents/CampagneImg.vue'

  export default {
    name: 'HomeView',
    components: {
      MovieAuto,
      CarouselImg,
      GridImg,
      CampagneImg
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
        ],

        campagneImages: [
          // {
          //   src: '/img1200/mono/mono-140',
          //   alt: 'mono 140'
          // },
          {
            src: '/img1200/mono/mono-143.jpg',
            alt: 'mono 143'
          },
          {
            src: '/img1200/mono/mono-141.jpg',
            alt: 'mono 141'
          },
          {
            src: '/img1200/mono/mono-142.jpg',
            alt: 'mono 142'
          }
          /* {
            src: '/img1200/thumb/thumb-132.jpg',
            alt: 'thumb-132'
          },
          {
            src: '/img1200/thumb/thumb-133.jpg',
            alt: 'thumb-133'
          },
          {
            src: '/img1200/thumb/thumb-134.jpg',
            alt: 'thumb-134'
          }*/
        ]
      }
    }
    /*  mounted() {
      this.fetchCampagneImages()
    },
    methods: {
      async fetchCampagneImages() {
        try {
          const response = await fetch('/assets/products.json')
          const data = await response.json()
          const campagneImages = data
            .filter((item) => item.type === 'campagne')
            .map((item) => ({
              src: item.src,
              alt: item.name
            }))
          this.campagneImages = this.shuffle(campagneImages)
        } catch (error) {
          console.log(error)
        }
      },
      shuffle(array) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
        return array
      }
    }*/
  }
</script>
