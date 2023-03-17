<!-- KZ new child component for MyAccount->HelpChild->ShippingTrackingqr
-->

<template>
  <div class="shipping-tracking">
    <h2>Shipping and Tracking</h2>
    <div class="shipment-list">
      <!-- <div v-for="shipment in shipments" :key="shipment.id" class="shipment">
        <div class="shipment-info">
          <h3>{{ shipment.title }}</h3>
          <p>{{ shipment.description }}</p>
          <p>Tracking number: {{ shipment.trackingNumber }}</p>
        </div>
      </div> -->
      <div class="shipment-qrcode">
        <!-- <qrcode-vue :value="'shipment:' + shipment.trackingNumber" /> -->
        <qrcode-vue
          value="https://github.com/sheilabarnagot/modestore"
          size="300"
          level="H"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    name: 'ShippingTracking',
    data() {
      return {
        value: 'https://example.com',
        size: 300
      }
    },
    props: {
      shipments: {
        type: Array,
        required: true
      }
    },
    components: {
      QrcodeVue
    }
  }
</script>

<style scoped>
  .shipping-tracking {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    margin-left: 2rem;
  }

  .tracking-list {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tracking {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .tracking-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .tracking-info h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .tracking-info p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .tracking-qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tracking-qrcode qrcode {
    max-width: 100%;
  }
</style>
