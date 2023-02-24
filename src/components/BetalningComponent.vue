<template>
  <div>
    <h4>Betalningssätt: {{ Betalningssätt }}</h4>
  </div>

  <img src="frame.png" alt="QR-code" />

  <div>
    <label style="display: block" for="kortbetalning">Kortbetalning</label>

    <input
      @click="onKort"
      type="radio"
      id="form"
      value="Kortbetalning"
      v-model="Betalningssätt"
    />

    <!-- <input
      style="display: none"
      type="text"
      :value="kortnummer"
      placeholder="kortnummer"
    /> -->

    <!-- <input style="display: none" type="text" :value="MY" placeholder="M/Y" />
    <input style="display: none" type="text" :value="cvc" placeholder="CVC" /> -->
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

  <div class="swisha" v-if="Betalningssätt === 'Swish'">
    <b-button @click="modalShowswish = !modalShowswish">Swish</b-button>

    <b-modal v-model="modalShowswish" name="swishmodel">
      Swisha: <input type="skriv in telefonnummer" />
    </b-modal>
  </div>

  <div class="korten" v-if="Betalningssätt === 'Kortbetalning'">
    <b-button @click="modalShowkort = !modalShowkort">Kortbetalning</b-button>

    <b-modal v-model="modalShowkort" name="kortmodel"
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

  <div class="Fakturan" v-if="Betalningssätt === 'Faktura'">
    <b-button @click="modalShowfaktura = !modalShowfaktura">Faktura</b-button>

    <b-modal v-model="modalShowfaktura" name="fakturamodel"
      >Faktura <input placeholder="skriv din mejl" />
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
        modalShowswish: false,
        modalShowkort: false,
        modalShowfaktura: false
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
