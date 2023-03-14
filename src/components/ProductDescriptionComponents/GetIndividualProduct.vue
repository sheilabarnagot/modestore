<template>
  <div id="container">
    <img :src="dettur" />
    <p>{{ $route.params.name }}</p>
    <p>{{ $route.params.price }}</p>
    <p>{{ $route.params.product }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    components: {},
    data() {
      return {
        dettur: null
      }
    },
    methods: {
      fetchData() {
        this.dettur = this.$route.params.id.replaceAll(',', '/')
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }
</style>
