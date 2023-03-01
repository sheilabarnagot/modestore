<template>
  <div class="grid">
    <div v-for="item in items" :key="item.id">
      <a :href="`/product/${item.id}`">
        <img :src="item.src" alt="item.alt" />
        <!-- <p>{{ item.title }}</p>
        <p>{{ item.price }}</p> -->
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
  .grid {
    /* Style the grid as needed */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    /* Add styles for larger screens */
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
