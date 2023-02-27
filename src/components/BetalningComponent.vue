<template>
  <!-- <div class="container">
    <h1>confirm yor payment</h1>
    <div class="firs-row">
      <div class="owner">
        <h3>owner</h3>
        <div class="input-field">
          <input type="text" />
        </div>
      </div>
      <div class="cvv">
        <h3>CVV</h3>
        <div class="input-field">
          <input type="password" />
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="card-number">
        <h3>card-number</h3>
        <div class="input-filed">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="third-row">
      <h3>card-number</h3>
      <div class="selection">
        <div class="date">
          <select name="Months" id="Months">
            <option value="JAN">JAN</option>
            <option value="FEB">FEB</option>
            <option value="MAR">MAR</option>
          </select>
          <select name="years" id="years">
            <option value="2020">2020</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div> -->
  <!-- -------------här är orginalet---------- -->
  <div class="Payment">
    <h4>Betalningssätt: {{ Betalningssätt }}</h4>
  </div>

  <div class="cardpayment">
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

  <div class="swishpayment">
    <label style="display: block" for="swish">Swish</label>
    <input
      @click="onSwish"
      type="radio"
      id="form"
      value="Swish"
      v-model="Betalningssätt"
    />
  </div>

  <div class="fakturapayment">
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
      <!-- <img src="frame1.jpg" /> -->
      <!-- Swisha: <input type="skriv in telefonnummer" /> -->
    </b-modal>
  </div>

  <div class="korten" v-if="Betalningssätt === 'Kortbetalning'">
    <b-button @click="modalShowkort = !modalShowkort">Kortbetalning</b-button>

    <b-modal title="hhhhh" v-model="modalShowkort" name="kortmodel"
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

    <b-modal
      title="Invoice will be sent to your Email"
      v-model="modalShowfaktura"
      name="fakturamodel"
      >Type your Email:
      <b-form-input type="email" placeholder="me@example.com" />
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

<style scoped>
  .Payment {
    position: absolute;
    display: flex;
    justify-content: center;
    /* z-index: 2; */
    /* height: 4em; */
    width: 100%;
    top: 100px;
  }

  .cardpayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 150px;
  }

  .swishpayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 200px;
  }

  .fakturapayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 250px;
  }

  .swisha {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 300px;
  }

  .korten {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 300px;
  }

  .Fakturan {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 300px;
  }
</style>
