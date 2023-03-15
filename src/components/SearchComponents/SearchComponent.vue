<template>
  <div id="container">
    <template v-for="item in searchedItem" :key="item.id">
      <img :src="item.src" />
      <p>{{ item.name }}</p>
      <p>{{ item.product }}</p>
      <p>{{ item.price }}</p>
    </template>
  </div>
</template>

<script>
  export default {
    computed: {
      searchedItem() {
        return this.$store.state.searchedItems
      }
    }
  }
</script>

<style scoped>
  #container {
    margin-bottom: 6em;
  }
  img {
    max-width: 100%;
  }
</style>
