<!--KZ using props to show pictures in a grid. Responsive layout-->
<template>
  <div class="camp-container">
    <div class="grid-img">
      <h2 class="camp-title">{{ title }}</h2>
      <div class="grid-container">
        <!-- {{ columnsXs }} -->
        <!--         :style="{ backgroundImage: `url(${image.src})` }" -->
        <template v-for="(image, index) in images" :key="index">
          <img :src="image.src" />
        </template>
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
        default: 'New looks'
      },
      images: {
        type: Array,
        required: true
      },
      columnsXs: { type: Number, default: 1 },
      columnsSm: { type: Number, default: 1 },
      columnsMd: { type: Number, default: 1 },
      columnsLg: { type: Number, default: 2 },
      columnsXl: { type: Number, default: 2 }
    }
  }
</script>

<style scoped>
  .camp-container {
    margin: 0 auto;
    /* padding: 1rem;*/
    max-width: 1200px;
    background-color: #f5f5f5;
  }
  .camp-title {
    color: #464343;
    opacity: 0.8;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    /* grid-gap: 1rem; */
  }

  .grid-item {
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    /* padding-bottom: 150%;*/ /* Maintain 2:3 aspect ratio */
  }

  @media only screen and (min-width: 900px) {
    .grid-container {
      grid-template-columns: repeat(
        auto-fill,
        minmax(1, 1fr) /* Sheila helped with the columns bigger screens */
      ); /* Sm 3 columns */
    }
  }
</style>
