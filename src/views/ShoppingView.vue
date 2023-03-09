<!-- This file displays/contains the component that shows all the products. It also recieves
  information about the products through a custom event and passes the information to store.js via the test function
  in method. -->
<template>
  <CartComp @fromcartcomp="test" :category="category" />
</template>

<script>
  import CartComp from '../components/CartComponents/CartComp.vue'

  export default {
    components: {
      CartComp
    },
    // Here we recieve a prop from router.js. We are then using the props value up in "category" and sending it to the cartcomp.vue (the child).
    props: {
      category: {
        type: String,
        required: true
      }
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
