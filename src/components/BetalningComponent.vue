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
      value="kortbetalning "
      v-model="Betalningssätt"
    />

    <!-- <div>
      <p v-if="Betalningssätt !== ''">{{ Betalningssätt }}</p>
    </div> -->
    <!-- <div class="BB">
      <p v-if="Betalningssätt !== ''">{{ kort.Betalningssätt }}</p>
    </div> -->
    <!-- name="bankinfo" value="kort" v-model="Betalningssätt" /> -->

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
  </div>

  <input
    style="display: none"
    type="text"
    :value="number"
    placeholder="Skriv ditt nummer"
  />

  <div>
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

  <!-- <div>
    <button
      type="button"
      class="btn btn-secondary Bekräfta betalning"
      @click="copyXML()"
    >
      Bekräfta betalning<i class="bi bi-clipboard" />
    </button>
  </div> -->
  <div>
    <b-button @click="modalShow = !modalShow">Swish</b-button>

    <b-modal v-model="modalShow"
      >Swisha: <input placeholder="skriv in telefonnummer" />
    </b-modal>
  </div>
  <div>
    <b-button @click="modalShow = !modalShow">Kortbetalning</b-button>

    <b-modal v-model="modalShow"
      >Kort:
      <input
        style="display: block"
        type="text"
        :value="a"
        placeholder="Kortnummer"
      />
      <input style="display: block" type="text" :value="b" placeholder="M/Y" />
      <input style="display: block" type="text" :value="c" placeholder="CVC" />
    </b-modal>
  </div>
  <div>
    <b-button @click="modalShow = !modalShow">Faktura</b-button>

    <b-modal v-model="modalShow"
      >Faktura <input placeholder="skriv in telefonnummer" />
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Betalningssätt: '',
        MY: 'M/Y',
        cvc: 'CVC',
        kortnummer: 'kortnummer',
        modalShow: false
      }
    },
    methods: {
      OnFaktura() {},
      onSwish() {},
      onKort(MY) {
        this.MY = MY
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
