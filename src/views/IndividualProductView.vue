<template>
  <GetIndividualProductVue />
  <div id="hacky-divider" />
</template>

<script>
  import GetIndividualProductVue from '../components/ProductDescriptionComponents/GetIndividualProduct.vue'

  export default {
    components: {
      GetIndividualProductVue
    },
    methods: {
      testar() {
        console.log('ble')
      }
    }
  }
</script>

<style scoped>
  #hacky-divider {
    margin-bottom: 6em;
  }
</style>
