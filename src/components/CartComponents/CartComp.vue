<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div id="text-img-div">
          <div id="shirtname">{{ product.name }}</div>

          <img :src="`/assets/${product.pic}`" alt="product image" />
        </div>
        <button
          @click="
            () => $emit('fromcartcomp', product.name, product.id, product.pic)
          "
        >
          Add to cart
        </button>
      </li>
    </ul>

    <!-- <h2>Cart</h2> -->
    <!-- <div>
      {{ $store.state.items }}
    </div> -->
  </div>
</template>

<script>
  import productsData from '../../../products.json'
  export default {
    emits: ['fromcartcomp'],
    components: {},
    data() {
      return {
        products: productsData
      }
    },
    methods: {}
  }
</script>
<style>
  button {
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
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
  }

  button:hover {
    background-color: #3f684b;
  }
  img {
    max-width: 50%;
  }
  #shirtname {
  }
  ul {
    list-style: none;
  }
  #text-img-div {
  }
</style>
