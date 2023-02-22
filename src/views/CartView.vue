<script>
  import cartcomp from '../components/CartComponents/CartComp.vue'
  // import CartComp from '../components/CartComponents/CartComp.vue'
  // import ProductComp from '../components/CartComponents/ProductComponents.vue'
  export default {
    created() {
      this.product
    },
    components: {
      cartcomp
      // ProductComp
    },
    props: {
      product: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        test: 'test'
      }
    }
  }
</script>

<template><cartcomp /></template>
