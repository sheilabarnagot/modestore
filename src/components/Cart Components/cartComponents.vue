<template>
  <h2>Cart</h2>
  <div>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cartItems: []
      }
    }
  }
</script>
