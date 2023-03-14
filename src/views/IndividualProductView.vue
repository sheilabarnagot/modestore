<template>
  <GetIndividualProductVue />
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
