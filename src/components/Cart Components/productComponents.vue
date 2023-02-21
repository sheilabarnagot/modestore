<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="addToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>
