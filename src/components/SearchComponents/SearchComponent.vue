<template>
  <div class="search-wrapper">
    <input type="text" v-model="Search" placeholder="Search" />
    <button @click="SearchIcon">Search</button>
  </div>
</template>

<script>
  export default {
    created() {},

    data() {
      return {
        Search: ''
      }
    },
    methods: {
      SearchIcon() {}
    }
  }
</script>
