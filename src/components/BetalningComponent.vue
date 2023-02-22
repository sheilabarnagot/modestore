<template>
  <div>
    <h4>Payment: {{ payment }}</h4>
  </div>
  <!-- <div class="container"> -->
  <label style="display: block" for="kort">Credit Card</label>
  <input type="radio" id="form" value="Kort" v-model="payment" />

  <input
    style="display: none"
    type="text"
    :value="creditnumber"
    placeholder="Credit Number"
  />

  <input style="display: none" type="text" :value="my" placeholder="M/Y" />
  <input style="display: none" type="text" :value="cvc" placeholder="cvc" />
  <label style="display: block" for="swish">Swish</label>
  <input type="radio" id="form" value="Swish" v-model="payment" />

  <input
    style="display: none"
    type="text"
    :value="number"
    placeholder="Skriv ditt nummer"
  />
  <label style="display: block" for="faktura">faktura</label>
  <input type="radio" id="form" value="faktura" v-model="payment" />
  <!-- </div> -->
  <button @click="betala">Bekräfta betalning</button>
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
