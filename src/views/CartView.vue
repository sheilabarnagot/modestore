<script>
  export default {
    components: {},
    data() {
      return {
        test: 'test'
      }
    },
    computed: {
      storedShoppingItems() {
        return this.$store.state.items
      }
    }
  }
</script>

<template>
  <div id="container" :key="item.id" v-for="item in storedShoppingItems">
    <p>{{ item.i }}</p>
    <button @click="() => $store.commit('deleteItem', item.id)">Delete</button>
  </div>
</template>
// this.$store.commit('basketItem', ev) }
<style>
  #container {
    display: flex;
  }
</style>
