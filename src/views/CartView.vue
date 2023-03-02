<template>
  <div id="cartdiv">
    <h2 id="cartsh2">Cart</h2>
    <div v-for="item in visibleItems" :key="item.id">
      <p>{{ item.name }}</p>
      <img :src="`/public${item.src}`" alt="product image" />
      <button id="delete" @click="() => deleteItem(item)">Delete</button>
    </div>
  </div>
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
<style>
  #delete {
    background-color: red;
    border-radius: 15px;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    display: block;
    margin-top: 3px;
  }
  #delete:hover {
    background-color: #9c3f17;
  }
  #cartsh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 10px;
  }
  #cartdiv {
    padding-left: 2rem;
  }
</style>
