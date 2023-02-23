<!-- <template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products.shirts" :key="product.id">
        <div>{{ product.name }}</div>
        <button @click="addToCart(product)">Add to cart</button>
      </li>
    </ul>
    <cart :cart-items="cartItems" />
  </div>
</template>

<script>
  import Cart from '../components/CartComponents/Cart.vue'
  import productsData from '../products.json'

  export default {
    components: {
      Cart
    },
    data() {
      return {
        products: productsData,
        cartItems: []
      }
    },
    methods: {
      addToCart(product) {
        this.cartItems.push(product)
      }
    }
  }
</script> -->
