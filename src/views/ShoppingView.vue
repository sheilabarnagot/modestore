<!-- This file displays/contains the component that shows all the products. It also recieves
information about the products through a custom event and passes the information to store.js via the function
in method. -->
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
