<!--KZ using props to show pictures in a grid. Responsive layout-->
<template>
  <div class="gallery-container">
    <div class="grid-img">
      <h2 class="gallery-title">{{ title }}</h2>
      <div class="grid-container">
        <!-- {{ columnsXs }} -->
        <div
          class="grid-item"
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundImage: `url(${image.src})` }"
        >
          <div class="overlay">{{ image.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GridImg',
    props: {
      title: {
        type: String,
        default: 'Spring in Paris'
      },
      images: {
        type: Array,
        required: true
      },
      columnsXs: { type: Number, default: 2 },
      columnsSm: { type: Number, default: 2 },
      columnsMd: { type: Number, default: 3 },
      columnsLg: { type: Number, default: 3 },
      columnsXl: { type: Number, default: 3 }
    }
  }
</script>

<style scoped>
  .gallery-container {
    margin: 0 auto;
    /* padding: 1rem;*/
    max-width: 1200px;
    background-color: #f5f5f5;
  }
  .gallery-title {
    color: #464343;
    opacity: 0.8;
  }
  .grid-img {
    margin: 1rem;
    padding: 1rem;
    /*object-fit: cover;
    max-width: 1200px;*/
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .grid-item {
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 150%; /* Maintain 2:3 aspect ratio */
  }

  @media only screen and (min-width: 900px) {
    .grid-container {
      grid-template-columns: repeat(
        auto-fill,
        minmax(3, 1fr) /* Sheila helped with the columns bigger screens */
      ); /* Sm 3 columns */
    }
  }

  /*lägg till sen   .grid-item {
  background-size: cover;
  background-position: center;
  position: relative;
}

@media only screen and (min-width: 300px) {
  .grid-item {
    height: 200px;
  }
}

@media only screen and (min-width: 700px) {
  .grid-item {
    height: 300px;
  }
}

@media only screen and (min-width: 1200px) {
  .grid-item {
    height: 400px;
  }
}*/

  /*.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0.5rem;
    text-align: center;
  }*/
</style>
<!--<template>
  <div class="gallery-container">
    <h2>{{ galleryTitle }}</h2>
    <b-container>
      <b-row class="gall-gap-row">
        <b-col
          class="gall-gap-col"
          v-for="(image, index) in images"
          :key="index"
          :xs="columnsXs"
          :sm="columnsSm"
          :md="columnsMd"
          :lg="columnsLg"
          :xl="columnsXl"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="img-fluid"
            :style="{ width: '100%', height: 'auto' }"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      },
      columns: {
        type: Number,
        default: 3
      },
      galleryTitle: {
        type: String,
        default: 'Gallery'
      }
    },
    computed: {
      columnsMd() {
        return Math.floor(12 / Math.min(this.columns, 2))
      },
      columnsLg() {
        return Math.floor(12 / Math.min(this.columns, 3))
      },
      columnsXl() {
        return Math.floor(12 / Math.max(this.columns, 4))
      }
    }
  }
</script>
-->
<!--
<template>
  <div class="gallery-container">
    <h2>Spring in Paris</h2>
    <b-container>
      <b-row>
        <b-col v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="img-fluid" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    }
  }
</script>
-->
<!--
<style scoped>
  .gallery-container {
    margin: 20px;
  }

  h2 {
    margin-left: 20px;
  }

  .gall-gap-row {
    gap: 20px;
  }

  gall-gap-col {
    gap: 20px;
  }
</style>
-->
