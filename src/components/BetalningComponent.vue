<template>
  <div>
    <h4>Betalningssätt: {{ Betalningssätt }}</h4>
  </div>

  <div>
    <label style="display: block" class="form-check-radio" for="kort"
      >Kortbetalning</label
    >

    <input
      @click="onKort"
      type="radio"
      class="form-check-radio"
      id="form"
      name="bankinfo"
      value="kort"
      v-model="Betalningssätt"
    />

    <input
      style="display: block"
      type="text"
      :value="a"
      placeholder="kortnummer"
    />

    <input style="display: block" type="text" :value="b" placeholder="M/Y" />
    <input style="display: block" type="text" :value="c" placeholder="CVC" />
  </div>

  <div>
    <label style="display: block" for="swish">Swish</label>
    <input
      @click="onSwish"
      type="radio"
      id="form"
      value="Swish"
      v-model="Betalningssätt"
    />
<<<<<<< HEAD
=======
  </div>

  <input
    style="display: none"
    type="text"
    :value="number"
    placeholder="Skriv ditt nummer"
  />

  <div>
>>>>>>> 12c587bbe6dafee67609f29263562fca4f0be64c
    <input
      style="display: block"
      type="text"
      :value="number"
      placeholder="Skriv ditt nummer"
    />
  </div>

  <div>
    <label style="display: block" for="faktura">faktura</label>
    <input
      @click="OnFaktura"
      type="radio"
      id="form"
      value="faktura"
      v-model="payment"
    />

    <input
      style="display: block"
      type="text"
      :value="email"
      placeholder="Skriv ditt epost"
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
        Betalningssätt: 'Kortbetalning',
        MY: 'M/Y',
        cvc: 'CVC',
        kortnummer: 'kortnummer'
      }
    },
    methods: {
      OnFaktura() {},
      onSwish() {},
      onKort() {
        this.MY = 'M/Y'
      }
    }
  }
</script>

<style lang="scss">
  div {
    display: block;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
