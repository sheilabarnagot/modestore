<template>
  <div>Payment: {{ payment }}</div>
  <div class="container1" />
  <div class="card" />
  <div class="inner-card" />
  <div class="font" />

  <input type="radio" id="form" value="Kort" v-model="payment" />
  <label for="kort">Credit Card</label>

  <input type="text" :value="namn" placeholder="Credit Number" />

  <input type="text" :value="namn" placeholder="M/Y" />

  <input type="text" :value="namn" placeholder="CVC" />

  <input type="radio" id="form" value="Swish" v-model="payment" />
  <label for="swish">Swish</label>

  <input type="radio" id="form" value="Klarna" v-model="payment" />
  <label for="klarna">Klarna</label>
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
  .conatiner {
    min-height: 100vh;
    width: 100%;
    background: #000;
  }
  .card {
    width: 500px;
    height: 300px;
    color: #fff;
    cursor: pointer;
  }
  .inner-card {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .font {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #0045c7, #ff2c7d);
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
