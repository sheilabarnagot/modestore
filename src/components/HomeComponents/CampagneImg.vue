<template>
  <h2>Hej</h2>
</template>
<!--<template>
  <div class="campagne-container">
    <div class="campagne-img">
      <h2 class="campagne-title">{{ title }}</h2>
      <div class="grid-container">
        <div
          class="campagne-item"
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
    name: 'CampagneImg',
    props: {
      title: {
        type: String,
        default: 'The look'
      },
      images: {
        type: Array,
        required: true
      },
      columnsXs: { type: Number, default: 3 },
      columnsSm: { type: Number, default: 3 },
      columnsMd: { type: Number, default: 4 },
      columnsLg: { type: Number, default: 4 },
      columnsXl: { type: Number, default: 4 }
    }
  }
</script>

<style scoped>
  .campagne-container {
    margin: 0 auto;
    padding: 1rem;
    /* max-width: 1200px;*/
    background-color: #f5f5f5;
  }
  .campagne-title {
    color: #464343;
    opacity: 0.8;
  }
  .campagne-img {
    margin: 1rem;
    padding: 1rem;
    /*object-fit: cover;
    max-width: 1200px;*/
  }

  .grid-container {
    display: grid;
    /*  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));*/
    grid-gap: 1rem;
  }

  .campagne-item {
    /*height: 400px;*/
    /*  background-size: cover;*/
    background-position: center;
    position: relative;
    padding-bottom: 150%; /* Maintain 2:3 aspect ratio */
  }

  /* @media only screen and (min-width: 900px) {
    .grid-container {
      grid-template-columns: repeat(auto-fill, minmax(4, 1fr));
    }
  }*/
</style>
-->
