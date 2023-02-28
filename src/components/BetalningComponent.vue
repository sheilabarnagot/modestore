<template>
  <div class="Payment">
    <h4>Payment: {{ Payment }}</h4>
  </div>

  <div class="cardPayment">
    <label style="display: block" for="Creditcard">Creditcard</label>

    <input
      @click="onKort"
      type="radio"
      id="form"
      value="Creditcard"
      v-model="Payment"
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
      v-model="Payment"
    />
  </div>

  <div class="fakturapayment">
    <label style="display: block" for="Faktura">Faktura</label>
    <input
      @click="OnFaktura"
      type="radio"
      id="form"
      value="Faktura"
      v-model="Payment"
    />
  </div>

  <div class="swisha" v-if="Payment === 'Swish'">
    <b-button @click="modalShowswish = !modalShowswish">Swish</b-button>

    <b-modal v-model="modalShowswish" name="swishmodel">
      <!-- <img src="frame1.jpg" /> -->
      <!-- Swisha: <input type="skriv in telefonnummer" /> -->
    </b-modal>
  </div>

  <div class="card" v-if="Payment === 'Creditcard'">
    <b-button @click="modalShowkort = !modalShowkort">Creditcard</b-button>

    <b-modal
      title="confirm yor payment"
      v-model="modalShowkort"
      name="kortmodel"
    >
      <div class="container">
        <div class="first">
          <b-form-input type="text" placeholder="Owner" />
        </div>
        <div class="second">
          <b-form-input type="text" placeholder="00000-000" />
        </div>
        <div class="third">
          <b-form-input type="password" placeholder="CVV" />
        </div>
        <div class="forth">
          <b-form-input type="text" placeholder="Card-number" />
        </div>

        <!-- <div class="container">
        <h1>confirm yor payment</h1>
        <div class="first">
          <div class="owner">
            <h3>owner</h3>
            <div class="input1">
              <input type="text" />
            </div>
          </div>
          <div class="cvv">
            <h3>cvv</h3>
            <div class="input2">
              <input type="password" />
            </div>
          </div>
        </div>
        <div class="second">
          <div class="card-number">
            <h4>card-number</h4>
            <div class="input3">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="third">
          <h4>M/Y</h4> -->
        <div class="selection">
          <div class="date">
            <select name="Months" id="Months">
              <option value="JAN">JAN</option>
              <option value="FEB">FEB</option>
              <option value="MAR">MAR</option>
              <option value="APR">APR</option>
              <option value="MAY">MAJ</option>
              <option value="JUN">JUN</option>
              <option value="JUL">JUL</option>
              <option value="AUG">AUG</option>
              <option value="SEP">SEP</option>
              <option value="OKT">OKT</option>
              <option value="NOV">NOV</option>
              <option value="DEC">DEC</option>
            </select>
            <select name="years" id="years">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2023">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <img src="" alt="cardlogo" />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
  <!-- </div> -->
  <!-- </b-modal> -->
  <!-- </div> -->
  <div class="Fakturan" v-if="Payment === 'Faktura'">
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
        Payment: '',
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

  /* .cardpayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 150px;
  } */

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

  .cardPayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 150px;
  }

  .Fakturan {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 300px;
  }

  .card {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 350px;
  }
  .container {
    height: 300px;
    width: 450px;
    background-color: white;
    display: flex;
    margin-right: 50px;
    flex-direction: column;
    padding: 30px;
  }

  /* .container h1 {
    text-align: center;
  } */

  /* .first {
    display: flex;
  } */

  /* .owner {
    width: 100%;
  } */
  .selection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .section select {
    padding: 10px 20px;
  }

  .first {
    margin: 5px;
  }
  .second {
    margin: 5px;
  }
  .third {
    margin: 5px;
  }
  .forth {
    margin: 5px;
  }
</style>
