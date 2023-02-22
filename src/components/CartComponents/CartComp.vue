<template>
  <div>
    <h2>Cart</h2>
    <div>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cartItems: {
        type: Array,
        required: true
      }
    }
  }
</script>
