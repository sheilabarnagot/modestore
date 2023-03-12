<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->ExchangesComponent -->

<template>
  <div>
    <h2>Exchanges</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.status }}
        <button @click="showExchangeDialog(product)">Exchange/Return</button>
      </li>
    </ul>

    <!-- Exchange/Return dialog box -->

    <div v-if="showDialog">
      <h3>Exchange/Return {{ selectedProduct.name }}</h3>
      <label>
        <input type="radio" v-model="exchangeType" value="exchange" /> Exchange
      </label>
      <label>
        <input type="radio" v-model="exchangeType" value="return" /> Return
      </label>
      <br />
      <label>
        Reason:
        <select v-model="exchangeReason">
          <option value="wrong-size">Wrong size</option>
          <option value="defective">Defective product</option>
          <option value="changed-mind">Changed my mind</option>
        </select>
      </label>
      <br />
      <button @click="exchangeProduct">Confirm</button>
      <button @click="hideExchangeDialog">Cancel</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product A', status: 'delivered' },
          { id: 2, name: 'Product B', status: 'delivered' },
          { id: 3, name: 'Product C', status: 'on the way' }
        ],
        showDialog: false,
        selectedProduct: null,
        exchangeType: 'exchange',
        exchangeReason: ''
      }
    },
    methods: {
      showExchangeDialog(product) {
        this.showDialog = true
        this.selectedProduct = product
      },
      hideExchangeDialog() {
        this.showDialog = false
        this.selectedProduct = null
        this.exchangeType = 'exchange'
        this.exchangeReason = ''
      },
      exchangeProduct() {
        // Find the selected product in the products array
        const productIndex = this.products.findIndex(
          (p) => p.id === this.selectedProduct.id
        )
        if (productIndex !== -1) {
          // Update the product status based on the exchange type
          if (this.exchangeType === 'exchange') {
            this.products[productIndex].status = 'exchanged'
          } else if (this.exchangeType === 'return') {
            this.products[productIndex].status = 'returned'
          }
          // Add a reason for the exchange/return
          this.products[productIndex].reason = this.exchangeReason
        }
        // Hide the exchange/return dialog box
        this.hideExchangeDialog()
      }
    },
    computed: {
      exchangedProducts() {
        return this.products.filter((p) => p.status === 'exchanged')
      },
      returnedProducts() {
        return this.products.filter((p) => p.status === 'returned')
      }
    }
  }
</script>
