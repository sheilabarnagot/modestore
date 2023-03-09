<!-- <template>
  <div class="home">
    <h1>payment integration</h1>
    <stripe-Checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :sucess-url="successURL"
      :CANCEL-URL="canselURL"
      @loading="(v) => (loading = v)"
    />
    <button @click="submit">Pay now</button>
  </div>
</template>

<script>
  import { stripeCheckout } from '@vue-stripe/ vue-stripe'
  export default {
    components: {
      stripeCheckout
    },
    data() {
      this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY
      return {
        loading: false,
        lineItems: [
          {
            price: 'some-price-id',
            quantity: 1
          }
        ],
        sucessUrl: 'your-success-url',
        cancelURL: 'your-cancel-url'
      }
    },
    methods: {
      submit() {
        this.$refs.checkout.redirectToCheckout()
      }
    }
  }
</script> -->
