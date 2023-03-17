<template>
  <div class="container5">
    <div class="card-box">
      <div class="payment-details">
        <!-- Detta är den nya input för leverans, samt betalsätt -->
        <h3>Delivery address</h3>
        <p>
          Complete your purchase by entering your payment details and your
          address information.
        </p>
      </div>
      <!--här börjar första input botstrap, när man skriver in namn lyser grönt. -->
      <div class="input-text">
        <b-form-input
          type="text"
          placeholder="Ex jon"
          v-model="input1"
          :state="input1.length >= 3 ? true : false"
        />
        <span>Name</span>
      </div>
      <div class="input-text">
        <b-form-input
          type="text"
          placeholder="me@example.com"
          v-model="input2"
          :state="input2.length >= 4 ? true : false"
        />
        <span>Email</span>

        <div class="country">
          <select>
            <option>Select Country</option>
            <option>United States</option>
            <option>Spain</option>
            <option>England</option>
            <option>France</option>
            <option>Sweden</option>
          </select>

          <div class="zip-state">
            <div class="zip">
              <b-form-input
                type="text"
                placeholder="zip"
                v-model="input3"
                :state="input3.length >= 4 ? true : false"
              />
            </div>
            <div class="state">
              <b-form-input
                type="text"
                placeholder="State"
                v-model="input5"
                :state="input5.length >= 4 ? true : false"
              />
            </div>
          </div>
        </div>
        <div class="input-text">
          <b-form-input
            type="text"
            placeholder="123 main st"
            v-model="input4"
            :state="input4.length >= 4 ? true : false"
          />

          <span> Address </span>
        </div>

        <div class="container2">
          <!-- chose {{ Payment }} välj betalsätt mellan card, swish och invoice -->
          <div id="box2-container">
            <div class="box2">
              <label style="display: block" for="Creditcard">Creditcard</label>
              <input
                @click="onKort"
                type="radio"
                id="form"
                value="Creditcard"
                v-model="Payment"
              />
            </div>
            <div class="box2">
              <label style="display: block" for="swish">Swish</label>
              <input
                @click="onSwish"
                type="radio"
                id="form"
                value="Swish"
                v-model="Payment"
              />
            </div>
            <div class="box2">
              <label style="display: block" for="Faktura">Invoice</label>
              <input
                @click="OnFaktura"
                type="radio"
                id="form"
                value="Faktura"
                v-model="Payment"
              />
            </div>
          </div>
          <!-- här är modalerna som innehåller betalsätten -->
          <div class="box2">
            <div class="pay" v-if="Payment === 'Swish'">
              <b-button class="btn" @click="modalShowswish = !modalShowswish"
                >pay
              </b-button>

              <b-modal
                title="Swish With Phone Number or Scan"
                v-model="modalShowswish"
                name="swishmodel"
                :no-close-on-backdrop="true"
                hide-footer
              >
                <img src="assets/swish.png" alt="" class="swishlogo" />

                <img src="assets/frame1.jpg" allt="" class="scan" />

                <b-form-input
                  required
                  class="sw"
                  type="number"
                  :state="number.length >= 4 ? true : false"
                  placeholder="+46"
                  v-model="number"
                  @click="ok"
                />
                <!-- <img src="assets/frame1.jpg" allt="" class="scan" /> -->
                <!-- Ny:  -->
                <b-button
                  class="swishbtn"
                  :disabled="disabled"
                  href="#/submit"
                  modalShowswish
                >
                  Confirm
                </b-button>
                <!-- om nummer ej inskriver och man clickar på confirm så ska error message returneras -->
                <p v-if="ErrorMessage" style="color: red">
                  Please fill in your number
                </p>
              </b-modal>
            </div>
            <!-- modal for Creditcard -->
            <div class="pay" v-if="Payment === 'Creditcard'">
              <b-button class="btn" @click="modalShowkort = !modalShowkort"
                >pay
              </b-button>

              <b-modal
                title="confirm your payment"
                v-model="modalShowkort"
                name="kortmodel"
                :no-close-on-backdrop="true"
                hide-footer
              >
                <!-- alla input måste vara ifyllda innan man kan klicka op confirm knappen -->
                <div class="inputCard">
                  <div class="first">
                    <b-form-input
                      required
                      type="text"
                      :state="cardowner.length >= 3 ? true : false"
                      placeholder="Card-owner"
                      v-model="cardowner"
                      @click="ok"
                    />
                  </div>
                  <div class="second">
                    <b-form-input
                      required
                      type="number"
                      :state="kortnummer.length >= 3 ? true : false"
                      placeholder="card-number"
                      v-model="kortnummer"
                      @click="ok"
                    />
                  </div>
                  <div class="third">
                    <b-form-input
                      required
                      type="number"
                      :state="CVC.length >= 3 ? true : false"
                      placeholder="CVC"
                      v-model="CVC"
                      @click="ok"
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
                      <img
                        src="assets/mastercardlogo.jpeg"
                        alt=""
                        class="logo"
                      />
                    </div>
                  </div>
                </div>
                <b-button
                  class="cardbtn"
                  :disabled="submit"
                  href="#/submit"
                  modalShowkort
                >
                  Confirm
                </b-button>
                <p v-if="ErrorMessage" style="color: red">
                  Please fill in your card information
                </p>
              </b-modal>
            </div>

            <div class="pay" v-if="Payment === 'Faktura'">
              <b-button
                class="btn"
                @click="modalShowfaktura = !modalShowfaktura"
                >pay
              </b-button>

              <b-modal
                title="Invoice will be sent to your Email"
                v-model="modalShowfaktura"
                name="fakturamodel"
                :no-close-on-backdrop="true"
                hide-footer
                >Type your Email:
                <b-form-input
                  type="email"
                  v-model="email"
                  :state="regex.test(email) && email.length > 1 ? true : false"
                  placeholder="me@example.com"
                  @click="ok"
                />
                <b-button
                  class="invbtn"
                  :disabled="regex.test(email) === false"
                  href="#/submit"
                  modalShowfaktura
                  >Confirm
                </b-button>
                <p v-if="regex.test(email) === false" style="color: red">
                  Please enter your Email!
                </p>
              </b-modal>
            </div>
            <b-modal
              title="Invoice will be sent to your Email"
              v-model="modalShowfaktura"
              name="fakturamodel"
              :no-close-on-backdrop="true"
              hide-footer
              >Type your Email:
              <b-form-input
                type="email"
                v-model="email"
                :state="regex.test(email) && email.length > 1 ? true : false"
                placeholder="me@example.com"
                @click="ok"
              />
              <b-button
                :disabled="regex.test(email) === false"
                href="#/submit"
                variant="primary"
                modalShowfaktura
                >Submit
              </b-button>
              <p v-if="regex.test(email) === false" style="color: red">
                Please enter your Email!
              </p></b-modal
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Payment: '',
        CVC: '',
        kortnummer: '',
        cardowner: '',
        modalShowswish: false,
        modalShowkort: false,
        modalShowfaktura: false,
        regex: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
        email: '',
        number: '',
        state: '',
        zip: '',
        isConfirmd: false,
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
      }
    },

    computed: {
      submit() {
        return (
          this.cardowner === '' || this.kortnummer === '' || this.CVC === ''
        )
      },
      ErrorMessage() {
        return (
          this.submit &&
          (this.cardowner !== '' || this.kortnummer !== '' || this.CVC !== '')
        )
      }
      // disabled() {
      //   return !this.number

      // notEmpty() {
      //   return (
      //     this.input1 &&
      //     this.input2 &&
      //     this.input3 &&
      //     this.input4 &&
      //     this.input5 &&
      //     this.number
      //   )
      // }
    },

    methods: {
      ok() {
        // this.showErrorMessage = this.cardowner === '';
        // && this.kortnummer === '' && this.CVC === '';
      }
    }
  }
</script>

<style scoped>
  .AA {
    background-color: #eeece5;
  }

  .container2 {
    display: flex;
    flex-direction: column;
    font-family: 'didot', sans-serif;
    margin-bottom: 6em;
  }

  #box2-container {
    display: flex;
  }

  .box2 {
    height: 80px;
    margin: 10px;
    font-size: small;
  }

  .Fakturan {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 400px;
  }

  .section select {
    padding: 10px 20px;
  }

  .first {
    margin: 5px;
    border: 1px solid #f6f6f7;
  }
  .second {
    margin: 5px;
    border: 1px solid #f6f6f7;
  }
  .third {
    margin: 5px;
    border: 1px solid #f6f6f7;
  }
  .forth {
    margin: 5px;
  }

  .logo {
    width: 160px;
    padding: 15px;
  }
  .swishlogo {
    width: 150px;
  }

  #form {
    width: 15px;
    height: 15px;
    margin: 10px 10px 0 0;
    margin-left: 15px;
    border: 6px solid #000;
    color: #000;
    margin-bottom: 20px;
  }

  .cardbtn {
    background-color: black;
    width: 400px;
    width: 100%;
    height: 40px;
  }

  .invbtn {
    background-color: black;
    width: 400px;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-right: 30px;
    margin-top: 10px;
  }

  .swishbtn {
    background-color: black;
    width: 400px;
    width: 100%;
    height: 40px;
  }

  #Months {
    margin: 5px;
  }

  #years {
    margin: 5px;
  }

  .container5 {
    color: #47413d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'didot', sans-serif;
  }

  .card-box {
    /* width: 90vh; */
    border-radius: 20px;
    background-color: #fff;
    padding: 0 25px;
    box-sizing: border-box;
    height: 90vh;
  }
  .message {
    position: fixed;
    margin-top: 150px;
  }
  .payment-details {
    margin-top: 70px;
    text-align: center;
  }
  .payment-details p {
    font-size: 12px;
    font-weight: 700;
    color: #89898e;
  }
  .input-text {
    position: relative;
    margin-top: 40px;
  }
  input[type='text'] {
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: 0;
    border: 1px solid #f6f6f7;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 12px;
    font-family: 'didot', sans-serif;
  }
  input[type='number'] {
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: 0;
    border: 1px solid #f6f6f7;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 12px;
    font-family: 'didot', sans-serif;
  }
  .input-text span {
    position: absolute;
    top: -16px;
    left: 8px;
    font-size: 12px;
    font-weight: 600;
  }

  .country {
    margin-top: 20px;
  }
  .country span {
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    top: -16px;
    left: 10px;
  }
  .country select {
    height: 35px;
    width: 100%;
    font-size: 12px;
    outline: 0;
    padding-left: 5px;
    border: 1px solid #f6f6f7;
    cursor: pointer;
  }

  .zip-state {
    display: flex;
    width: 100%;
  }
  .zip {
    width: 50%;
  }
  .zip input[type='text'] {
    height: 40px;
  }
  .state {
    width: 50%;
  }

  .text-data p {
    margin-top: 3px;
    font-size: 12px;
    font-weight: 600;
  }

  .pay {
    min-width: 200px;

    justify-content: center;
    align-items: center;

    background-color: #d7dad8;
    color: #000;
  }

  .pay button {
    width: 100%;
    background-color: #89898e;
    color: #000;
    transition: all 0.5s;
    transform: translate(0%, -4%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 12px;
  }
  .pay button:hover {
    background-color: #d7dad8 !important;
  }

  #button-container {
    display: flex;
  }

  @media screen and (min-width: 900px) {
    .container5 {
      display: flex;
      flex-direction: column;
    }
    .pay {
      text-decoration: none;
      color: #3c3e3f;
    }
  }
  @media screen and (min-width: 600px) {
    .container5 {
      min-height: 100vh;
      /* margin-bottom: 6em; */
      padding-left: 2rem;
      display: flex;

      gap: 1em;
      font-family: 'didot', sans-serif;
    }
  }

  .scan {
    width: 15%;
    margin: 50px;
  }

  .sw {
    margin-bottom: 20px;
  }
</style>
