<script>
  // import CartComp from '../components/CartComponents/CartComp.vue'
  import cartComp from '../components/CartComponents/CartComp.vue'
  export default {
    components: {
      // CartComp,
      cartComp
    },
    data() {
      return {
        test: 'test'
      }
    }
  }
</script>

<template>
  <cartComp />
</template>
