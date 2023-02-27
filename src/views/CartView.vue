<template>
  <div id="container">
    <template :key="item.id" v-for="item in visibleItems">
      <p>{{ item.i }}</p>
      <button
        v-if="!item.isClicked"
        @click="(event) => deleteItem(item, event)"
      >
        Delete
      </button>
    </template>
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
    padding-bottom: 4em;
  }
</style>
