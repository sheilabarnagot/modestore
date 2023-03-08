<template>
  <div class="AA">
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
      <b-button class="swishbtn" @click="modalShowswish = !modalShowswish"
        >Swish <i class="bi bi-cash-coin" />
      </b-button>

      <b-modal
        title="Swish With Phone Number or Scan"
        v-model="modalShowswish"
        name="swishmodel"
      >
        <img src="assets/swish.png" alt="" class="swishlogo" />

        <b-form-input
          class="swish-number"
          required
          type="number"
          :state="number.length >= 4 ? true : false"
          placeholder="+46"
          v-model="number"
        />
        <img src="assets/frame1.jpg" allt="" class="scan" />
      </b-modal>
    </div>

    <div class="kort" v-if="Payment === 'Creditcard'">
      <b-button class="cardbtn" @click="modalShowkort = !modalShowkort"
        >Creditcard <i class="bi bi-credit-card-2-back" />
      </b-button>

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
              :state="cardowner.length >= 3 ? true : false"
              placeholder="Card owner"
              v-model="cardowner"
            />
          </div>
          <div class="second">
            <b-form-input
              required
              type="number"
              :state="kortnummer.length >= 3 ? true : false"
              placeholder="card-number"
              v-model="kortnummer"
            />
          </div>
          <div class="third">
            <b-form-input
              required
              type="password"
              :state="CVC.length >= 3 ? true : false"
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
      <b-button class="invocebtn" @click="modalShowfaktura = !modalShowfaktura"
        >Invoice <i class="bi bi-envelope-exclamation" />
      </b-button>

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
        // console.log('jhjjh' + this.kortnummer + this.CVC + this.cardowner)
        console.log(event.target)

        if (
          this.kortnummer !== '' &&
          this.CVC !== '' &&
          this.cardowner !== ''
        ) {
          console.log('pay ok')
        } else {
          console.log()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  // @import url('https://fonts.googleapis.com/css?family=Questrial');

  // .application {
  //   font-family: 'Questrial';
  // }

  // :root {
  //   --bs-body-bg: red;
  // }

  .Payment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100px;
    border-bottom: solid 3px;
  }

  .swishpayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 200px;
    margin-bottom: 20px;
    // background-color: #d2e3df;
  }

  .fakturapayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 250px;
    // background-color: #dcc6b9;
  }

  .cardPayment {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 150px;
    margin-top: 150px;
    // background-color: #6d9288;
  }

  .swisha {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 400px;
  }

  .Fakturan {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 400px;
  }

  .kort {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 400px;
  }

  // .selection {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 10px;
  // }

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
    width: 160px;
    padding: 10px;
  }
  .swishlogo {
    width: 150px;
  }
  // .swishaBtn {
  //   width: 100px;
  //   // left: 40px;
  //   background-color: #33bedf;
  // }

  .swish-number {
    width: 400px;
    top: 300px;
    left: 400px;
    font-size: 20px;
    color: #000;
  }

  #form {
    width: 15px;
    height: 15px;
    margin: 6px 6px 0 0;
    margin-left: 6px;
    appearance: none;
    border: 2px solid #000;
  }
  #form:checked {
    background-color: #000;
  }

  .cardbtn {
    background-color: black;
  }

  .invocebtn {
    background-color: black;
    width: 124px;
  }

  .scan {
    display: block;
    padding: 40px;
    margin-left: 80px;
    width: 250px;
  }

  #Months {
    margin: 5px;
  }

  #years {
    margin: 5px;
  }
</style>
