<template>
  <p>123</p>
</template>

<script>
  export default {
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const response = await fetch('../../assets/products.json')
        const result = await response.json()

        console.log(
          // https://stackoverflow.com/questions/70480022/filter-search-with-computed-in-vue-js-3
          result.productpics.filter((entry) =>
            result.productpics.length
              ? Object.keys(result.productpics[0]).some((key) =>
                  ('' + entry[key]).toLowerCase().includes('leather')
                )
              : true
          )
        )
      }
    }
  }
</script>
