<template>
  <div>
    <h4>Payment: {{ payment }}</h4>
  </div>

  <div>
    <label style="display: block" for="kort">Credit Card</label>
    <input
      @click="onKort"
      type="radio"
      id="form"
      value="Kort"
      v-model="payment"
    />
  </div>

  <input
    style="display: none"
    type="text"
    :value="creditnumber"
    placeholder="Credit Number"
  />

  <input style="display: none" type="text" :value="my" placeholder="M/Y" />
  <input style="display: none" type="text" :value="cvc" placeholder="cvc" />
  <div>
    <label style="display: block" for="swish">Swish</label>
    <input
      @click="onSwish"
      type="radio"
      id="form"
      value="Swish"
      v-model="payment"
    />
  </div>

  <input
    style="display: none"
    type="text"
    :value="number"
    placeholder="Skriv ditt nummer"
  />

  <div>
    <label style="display: block" for="faktura">faktura</label>
    <input
      @click="onFaktura"
      type="radio"
      id="form"
      value="faktura"
      v-model="payment"
    />
  </div>
  <div>
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
    },
    methods: {
      onFaktura() {
        this.my
      },
      onSwish() {},
      onKort() {}
    }
  }
</script>

<!-- <style scoped>
  input #form label {
    position: absolute;
  }
</style> -->

<style lang="scss"></style>
