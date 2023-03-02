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
      return {}
    },
    methods: {
      test(name, id, src, price, product) {
        this.$store.commit('basketItem', { name, id, src, price, product })
      }
    }
  }
</script>
