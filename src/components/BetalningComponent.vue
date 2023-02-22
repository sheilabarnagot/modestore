<template>
  <!-- <div>
    <div>
      <input
        type="radio"
        class="form-check-radio"
        id="a"
        name="bankinfo"
        value="cardnumber"
      />
      <label class="form-check-radio" for="a">A</label>
    </div>
    <div>
      <input
        type="radio"
        class="form-check-radio"
        id="b"
        name="bankinfo"
        value="cvc"
      />
      <label class="form-check-radio" for="b">B</label>
    </div>
    <div>
      <input
        type="radio"
        class="form-check-radio"
        id="c"
        name="bankinfo"
        value="my"
      />
      <label class="form-check-radio" for="c">C</label>
    </div>
  </div> -->

  <div>
    <h4>Payment: {{ payment }}</h4>
  </div>

  <div>
    <input type="radio" id="form" value="Kort" v-model="payment" />
    <label style="display: block" for="kort">Credit Card</label>

    <input
      style="display: none"
      type="text"
      :value="creditnumber"
      placeholder="CreditNumber"
    />

    <input style="display: none" type="text" :value="my" placeholder="M/Y" />
    <input style="display: none" type="text" :value="cvc" placeholder="cvc" />
  </div>

  <label style="display: block" for="swish">Swish</label>
  <input type="radio" id="form" value="Swish" v-model="payment" />

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
    },
    methods: {
      OnFaktura() {}
    }
  }
</script>
