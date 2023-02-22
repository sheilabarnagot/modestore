<template>
  <div>Payment: {{ payment }}</div>
  <div class="container">
    <input type="radio" id="form" value="Kort" v-model="payment" />
    <label for="kort">Credit Card</label>

    <input type="text" :value="namn" placeholder="Credit Number" />

    <input type="text" :value="namn" placeholder="M/Y" />

    <input type="text" :value="namn" placeholder="CVC" />

    <input type="radio" id="form" value="Swish" v-model="payment" />
    <label for="swish">Swish</label>

    <input type="radio" id="form" value="Klarna" v-model="payment" />
    <label for="klarna">Klarna</label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        payment: 'Kort'
      }
    }
  }
</script>

<style lang="css">
  input {
    width: 50vw;
  }
</style>
