<template>
  <CartComp @fromcartcomp="test" />
</template>

<script>
  import CartComp from '../components/CartComponents/CartComp.vue'

  export default {
    components: {
      CartComp
    },
    data() {
      return {
        items: []
      }
    },
    methods: {
      test(ev) {
        this.$store.commit('basketItem', ev)
      }
    }
  }
</script>
