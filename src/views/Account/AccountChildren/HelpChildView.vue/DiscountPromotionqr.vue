<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->DiscountPromotionqr
-->
<!--
<template>
  <div class="discounts-promotions">
    <h2>Discounts and Promotions</h2>
    <div class="promo-list">
      <div v-for="promo in promos" :key="promo.id" class="promo">
        <div class="promo-info">
          <h3>{{ promo.title }}</h3>
          <p>{{ promo.description }}</p>
        </div>
        <div class="promo-qrcode">
          <qrcode :value="'promo:' + promo.code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Qrcode from 'qrcode.vue'

  export default {
    name: 'DiscountsPromotions',
    props: {
      promos: {
        type: Array,
        required: true
      }
    },
    components: {
      Qrcode
    }
  }
</script>

<style scoped>
  .discount-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }

  .discount-image {
    width: 80%;
    max-width: 300px;
  }

  .discount-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .discount-description {
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }

  .discount-qr {
    margin-top: 1rem;
    width: 80%;
    max-width: 300px;
  }
</style>
-->
