<template>
  <div id="container" :key="item.id" v-for="item in visibleItems">
    <p>{{ item.i }}</p>
    <button v-if="!item.isClicked" @click="() => deleteItem(item)">
      Delete
    </button>
  </div>
</template>

<script>
  export default {
    components: {},
    computed: {
      storedShoppingItems() {
        return this.$store.state.items
      },
      visibleItems() {
        return this.storedShoppingItems.filter((item) => !item.isClicked)
      }
    },
    methods: {
      deleteItem(item) {
        this.$store.commit('deleteItem', item.id)
        item.isClicked = true
      }
    }
  }
</script>

<style>
  #container {
    display: flex;
  }
</style>
