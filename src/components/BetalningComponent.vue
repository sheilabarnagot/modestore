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
    <label style="display: block" for="Faktura">Invoice</label>
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

    <!-- <b-modal v-model="modalShowswish" name="swishmodel" hide-footer> -->

    <b-modal
      title="Swish With phone number or Scan"
      v-model="modalShowswish"
      name="swishmodel"
    >
      <img src="assets/swish.png" alt="" class="swishlogo" />

      <b-form-input
        class="swish-number"
        required
        type="text"
        :state="number.length <= 1 ? false : true"
        placeholder="+46"
        v-model="number"
      />

      <img src="assets/frame1.jpg" allt="" class="scan" />

      <!-- <div class="swishaBtn">
        <b-button class="swishaBtn" variant="primary">Swisha</b-button>
      </div> -->
    </b-modal>
  </div>

  <div class="kort" v-if="Payment === 'Creditcard'">
    <b-button @click="modalShowkort = !modalShowkort">Credit card</b-button>

    <b-modal
      title="confirm yor payment"
      v-model="modalShowkort"
      name="kortmodel"
      @ok="(event) => pay(event)"
    >
      <div class="container">
        <div class="first">
          <b-form-input
            required
            type="text"
            :state="cardowner.length >= 1 ? true : false"
            placeholder="Card owner"
            v-model="cardowner"
          />
        </div>
        <div class="second">
          <b-form-input
            required
            type="text"
            :state="kortnummer.length >= 1 ? true : false"
            placeholder="card-number"
            v-model="kortnummer"
          />
        </div>
        <div class="third">
          <b-form-input
            required
            type="text"
            :state="CVC.length >= 1 ? true : false"
            placeholder="CVC"
            v-model="CVC"
          />
        </div>

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
            <img src="assets/mastercardlogo.jpeg" alt="" class="logo" />
          </div>
        </div>
      </div>
    </b-modal>
  </div>

  <div class="Fakturan" v-if="Payment === 'Faktura'">
    <b-button @click="modalShowfaktura = !modalShowfaktura">Invoice</b-button>

    <b-modal
      title="Invoice will be sent to your Email"
      v-model="modalShowfaktura"
      name="fakturamodel"
      >Type your Email:
      <b-form-input
        type="email"
        v-model="email"
        :state="regex.test(email) && email.length > 1 ? true : false"
        placeholder="me@example.com"
      />
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Payment: '',
        MY: 'M/Y',
        CVC: '',
        kortnummer: '',
        cardowner: '',
        modalShowswish: false,
        modalShowkort: false,
        modalShowfaktura: false,
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        email: '',
        number: ''
      }
    },
    methods: {
      OnFaktura() {},
      onSwish() {},
      onKort(MY) {
        this.MY = MY
      },
      inputValidation() {},
      pay(event) {
        console.log(event.target)

        if (
          this.kortnummer !== '' &&
          this.CVC !== '' &&
          this.cardowner !== ''
        ) {
          // console.log('pay nok')
        } else {
          // console.log('paymentinfo incomplete')
        }
      }
    }
  }
</script>

<style scoped>
  .Payment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100px;
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

  .cardPayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 150px;
  }

  .swisha {
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

  .kort {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 300px;
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

  .logo {
    width: 150px;
  }
  .swishlogo {
    width: 180px;
  }
  /* .swishaBtn {
    width: 100px;
    left: 162px;
  } */

  .swish-number {
    width: 450px;
    top: 500px;
    left: 450px;
  }

  .scan {
    display: block;
    padding: 50px;
    margin-left: 90px;
  }
</style>
