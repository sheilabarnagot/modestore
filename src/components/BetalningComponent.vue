<template>
  <div>
    <h4>Betalningssätt: {{ Betalningssätt }}</h4>
  </div>

  <div>
    <label style="display: block" for="kort">Kortbetalning</label>

    <input
      @click="onKort"
      type="radio"
      id="form"
      value="kort"
      v-model="Betalningssätt"
    />
  </div>

  <div>
    <input
      style="display: none"
      type="text"
      :value="kortnummer"
      placeholder="kortnummer"
    />

    <input style="display: none" type="text" :value="MY" placeholder="M/Y" />
    <input style="display: none" type="text" :value="cvc" placeholder="CVC" />
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
  </div>

  <input
    style="display: none"
    type="text"
    :value="number"
    placeholder="Skriv ditt nummer"
  />
  <label style="display: block" for="faktura">faktura</label>
  <input
    @click="OnFaktura"
    type="radio"
    id="form"
    value="faktura"
    v-model="payment"
  />

  <div>
    <input
      style="display: none"
      type="text"
      :value="number"
      placeholder="Skriv ditt nummer"
    />
  </div>
  <div>
    <label style="display: block" for="Faktura">Faktura</label>
    <input
      @click="OnFaktura"
      type="radio"
      id="form"
      value="Faktura"
      v-model="Betalningssätt"
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
