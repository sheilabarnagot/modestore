<template>
  <div class="hacky-divider" />
  <GetIndividualProductVue />
  <div class="hacky-divider" />
</template>

<script>
  import GetIndividualProductVue from '../components/ProductDescriptionComponents/GetIndividualProduct.vue'

  export default {
    components: {
      GetIndividualProductVue
    }
  }
</script>

<style scoped>
  .hacky-divider {
    /* margin-top: 6em; */
    margin-bottom: 6em;
  }
</style>
