<template>
  <div>
    <h4>Payment: {{ payment }}</h4>
  </div>
  <div class="container">
    <input type="radio" id="form" value="Kort" v-model="payment" />

    <label style="display: block" for="kort">Credit Card</label>

    <input
      style="display: none"
      type="text"
      :value="creditnumber"
      placeholder="Credit Number"
    />

    <input style="display: none" type="text" :value="my" placeholder="M/Y" />
    <input style="display: none" type="text" :value="cvc" placeholder="cvc" />

    <input type="radio" id="form" value="Swish" v-model="payment" />
    <label style="display: block" for="swish">Swish</label>
    <input
      style="display: none"
      type="text"
      :value="number"
      placeholder="Skriv ditt nummer"
    />

    <input type="radio" id="form" value="faktura" v-model="payment" />
    <label style="display: block" for="faktura">faktura</label>

    <button @click="betala">Bekräfta betalning</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        payment: 'Kort',
        my: 'M/Y',
        cvc: 'CVC',
        creditnumber: 'Credi† Number'
      }
    }
  }
</script>

<!-- <style scoped>
  input #form label {
    position: absolute;
  }
</style> -->

<style lang="scss"></style>
