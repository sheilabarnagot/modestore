<template>
  <div class="grid">
    <div v-for="(src, index) in imageSources" :key="index">
      <a :href="`/product/${index}`">
        <img :src="src" alt="Product Image" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jsonSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        imageSources: []
      }
    },
    async mounted() {
      const response = await fetch(this.jsonSrc)
      const data = await response.json()
      this.imageSources = data.map((item) => item.src)
    }
  }
</script>
<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  /*
  .grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 100%;
  }*/
</style>
<!--<template>
  <div class="grid">
    <div v-for="item in items" :key="item.id">
      <a :href="`/product/${item.id}`">
        <img :src="item.src" alt="item.alt" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .grid
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
-->
