<template>
  <div>
    <h2>Cart</h2>
    <div v-for="item in visibleItems" :key="item.id">
      <p>{{ item.i }}</p>
      <button @click="deleteItem(item)">Delete</button>
    </div>
  </div>
  <!-- hej -->
</template>

<script>
  export default {
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
        this.$store.commit('deleteItem', { id: item.id })
        item.isClicked = true
        console.log(item)
        console.log('visible:', this.visibleItems)
      }
    }
  }
</script>
