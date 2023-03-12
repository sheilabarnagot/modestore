<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->OrderComponent. Make it possible to change the order
-->
<!--
<template>
  <div>
    <h2>Order Details</h2>
    <ul>
      <li v-for="(item, index) in orderItems" :key="index">
        <div>{{ item.name }}</div>
        <div>{{ item.price }} kr</div>
        <div>{{ item.quantity }}</div>
        <div>{{ item.total }} kr</div>
        <div>
          <button @click="removeItem(index)">Remove Item</button>
        </div>
      </li>
    </ul>
    <div>Total: {{ orderTotal }} kr</div>
    <button @click="cancelOrder">Cancel Order</button>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['getOrderItems', 'getOrderTotal']),
      orderItems() {
        return this.getOrderItems
      },
      orderTotal() {
        return this.getOrderTotal
      }
    },
    methods: {
      ...mapMutations(['cancelOrderMutation', 'removeItemMutation']),
      cancelOrder() {
        // Call cancelOrderMutation to remove order from store
        this.cancelOrderMutation()
        // Redirect to homepage or order history
        this.$router.push({ name: 'Home' })
      },
      removeItem(index) {
        // Call removeItemMutation to remove item from order
        this.removeItemMutation(index)
      }
    }
  }
</script>

-->

<!--ShoppingCart can we sync this with the existing ShoppingCart??
Check with Roland and sync with json

<template>
  <div>
    <h1>Shopping Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="onEdit(index)">Edit</button>
            <button @click="onDelete(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Total: {{ total }}</h2>
    <button @click="onCheckout">Checkout</button>
    <BuyComponent
      v-if="showBuyComponent"
      :products="products"
      :total="total"
      @cancel="onCancelBuy"
      @confirm="onConfirmBuy"
    />
  </div>
</template>

<script>
import BuyComponent from "./BuyComponent.vue";

export default {
  components: {
    BuyComponent,
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          quantity: 2,
          price: 10,
        },
        {
          name: "Product 2",
          quantity: 1,
          price: 20,
        },
      ],
      total: 40,
      showBuyComponent: false,
    };
  },
  methods: {
    onEdit(index) {
      // Handle editing a product
    },
    onDelete(index) {

    -->
