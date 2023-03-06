<template>
  <!-- Here we are looping through and displaying the products with all the info about them. We are also placing a button next to each product that when clicked will send an emit with information to a custom event. -->
  <div>
    <h2 id="productsh2">Products</h2>
    <ul id="products">
      <li v-for="product in products.productpics" :key="product.id">
        <div id="shirtname">
          <p class="top-p">{{ product.name }}</p>
          <p class="bottom-p">{{ product.product }}</p>
        </div>

        <img :src="`/${product.src}`" alt="product image" />
        <p>{{ product.price }}</p>
        <!-- The buttons sending the productinfo -->
        <button
          id="addbutton"
          @click="
            () =>
              $emit(
                'fromcartcomp',
                product.name,
                product.id,
                product.src,
                product.price,
                product.product
              )
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
  // Import av json fil
  import productsData from '/assets/products.json'
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
<style scoped>
  #addbutton {
    background-color: #2ea44f;
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

  #addbutton:hover {
    background-color: #3f684b;
  }
  img {
    max-width: 50%;
    box-shadow: 50px 0px 50px 5px grey;
  }
  #shirtname {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style: none;
  }

  #productsh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: 'Gloock', serif;
  }
  #products {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
