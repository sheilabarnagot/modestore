<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->QrProductinfo
-->
<!--
<template>
  <div class="qrcode">
    <img :src="qrCodeSrc" alt="QR Code" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      qrCodeSrc() {
        // Generate QR code source URL based on product information
        // using a library such as or qrcode-vue
        return `https://example.com/qrcode?product=${this.product.id}`
      }
    }
  }
</script>

<style scoped>
  .qrcode {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .product-info {
    margin-top: 1rem;
  }
</style>
-->
