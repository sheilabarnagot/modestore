<script>
  // import cartcomp from '../components/CartComponents/CartComp.vue'

  export default {
    components: {},
    data() {
      return {
        test: 'test'
      }
    }
  }
</script>

<template>
  {{ $store.state.items }}
</template>
