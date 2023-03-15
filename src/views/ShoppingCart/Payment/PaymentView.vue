<template>
  <div class="paybutton">
    <div class="container5">
      <div class="card">
        <div class="payment-details">
          <h3>Shipping adress</h3>
        </div>
        <div class="input-text">
          <b-form-input
            type="text"
            placeholder="Ex jon"
            v-model="input1"
            :state="input1.length >= 4 ? true : false"
          />
          <span>Name</span>
          <div v-if="notEmpty" />
        </div>
        <div class="input-text">
          <b-form-input
            type="text"
            placeholder="me@example.com"
            v-model="input2"
            :state="input2.length >= 4 ? true : false"
          />
          <span>Email</span>
          <div v-if="notEmpty" />

          <div class="billing">
            <select>
              <option>Select Country</option>
              <option>United States</option>
              <option>Spain</option>
              <option>England</option>
              <option>France</option>
              <option>Sewden</option>
            </select>

            <div class="zip-state">
              <div class="zip">
                <b-form-input
                  type="text"
                  placeholder="ZIP"
                  v-model="input3"
                  :state="input3.length >= 4 ? true : false"
                />
                <div v-if="notEmpty" />
              </div>
              <div class="state">
                <b-form-input
                  type="text"
                  placeholder="State"
                  v-model="input5"
                  :state="input5.length >= 4 ? true : false"
                />
                <div v-if="notEmpty" />
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
            <div v-if="notEmpty" />
            <span> Address </span>
          </div>

          <div class="container2">
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

            <!-- <div class="box2">
              <label style="display: block" for="swish">Swish</label>
              <input
                @click="onSwish"
                type="radio"
                id="form"
                value="Swish"
                v-model="Payment"
              />
            </div> -->

            <div class="box2">
              <label style="display: block" for="Faktura">Invoice</label>
              <input
                @click="OnFaktura"
                type="radio"
                id="form"
                value="Faktura"
                v-model="Payment"
              />

              <div class="swisha" v-if="Payment === 'Swish'">
                <b-button class="btn" @click="modalShowswish = !modalShowswish"
                  >Swish
                </b-button>

                <b-modal
                  title="Swish With Phone Number or Scan"
                  v-model="modalShowswish"
                  name="swishmodel"
                  :no-close-on-backdrop="true"
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

              <div class="pay" v-if="Payment === 'Creditcard'">
                <button @click="modalShowkort = !modalShowkort">pay</button>

                <b-modal
                  title="confirm your payment"
                  v-model="modalShowkort"
                  name="kortmodel"
                  :no-close-on-backdrop="true"
                  hide-footer
                >
                  <div class="container">
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
                    :disabled="submitButtonDisabled"
                    href="#/submit"
                    variant="primary"
                    modalShowkort
                  >
                    Submit
                  </b-button>
                  <p v-if="showErrorMessage" style="color: red">
                    Please enter text!
                  </p>
                </b-modal>
              </div>

              <div class="pay" v-if="Payment === 'Faktura'">
                <button @click="modalShowfaktura = !modalShowfaktura">
                  pay
                </button>

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
                    :state="
                      regex.test(email) && email.length > 1 ? true : false
                    "
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
                  </p>
                </b-modal>
              </div>
            </div>
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
        MY: 'M/Y',
        CVC: '',
        kortnummer: '',
        cardowner: '',
        modalShowswish: false,
        modalShowkort: false,
        modalShowfaktura: false,
        regex: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
        email: '',
        number: '',
        fname: '',
        emailSH: '',
        adr: '',
        state: '',
        zip: '',
        isConfirmd: false,
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        tack: 'tacajajjajja'
        // input1Valid: true,
        // input2Valid: true,
        // errorMessage: ''
        // showErrorMessageShipp: false,
      }
    },

    computed: {
      submitButtonDisabled() {
        return (
          this.cardowner === '' || this.kortnummer === '' || this.CVC === ''
        )

        // && this.kortnummer === '' && this.CVC === '';
      },
      showErrorMessage() {
        return (
          this.submitButtonDisabled &&
          (this.cardowner !== '' || this.kortnummer !== '' || this.CVC !== '')
        )
      },
      isDisabled() {
        return !this.input1
      },
      showInput1Error() {
        return !this.input1 && !this.input1Valid
      },
      notEmpty() {
        return (
          this.input1 &&
          this.input2 &&
          this.input3 &&
          this.input4 &&
          this.input5
        )
      }

      // isAnyInputEmpty() {
      //   return this.input1 === '' || this.input2 === '' || this.input3 === '' || this.input4 === '' || this.input5 === ''
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

<style lang="scss" scoped>
  .AA {
    background-color: #eeece5;
  }

  .container2 {
    display: flex;
    flex-direction: row;
    font-family: 'didot', sans-serif;
  }

  .container2 {
    display: flex;
    flex-direction: row;
  }

  // display: block ;
  // justify-content: center;

  .box2 {
    height: 80px;
    margin: 10px;
    font-size: small;
  }

  // .btn {
  //   height: 40px;
  //   margin: 9px;
  //   margin-right: 220px;
  // }

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
    margin: 10px 10px 0 0;
    margin-left: 15px;
    // appearance: none;
    border: 6px solid #000;
    margin-bottom: 20px;
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
    background-color: black;
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

  .container5 {
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-family: 'didot', sans-serif;
    background-color: #eeece5;
  }

  .card {
    width: 100vh;
    border-radius: 10px;
    background-color: #fff;
    padding: 0 25px;
    box-sizing: border-box;
    height: 85vh;
  }
  .message {
    position: fixed;
    margin-top: 150px;
  }
  .payment-details {
    margin-top: 20px;
  }
  .payment-details p {
    font-size: 12px;
    font-weight: 700;
    color: #89898e;
  }
  .input-text {
    position: relative;
    margin-top: 30px;
  }
  input[type='text'] {
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: 0;
    border: 1px solid #f6f6f7;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 12px;
  }
  .input-text span {
    position: absolute;
    top: -16px;
    left: 10px;
    font-size: 12px;
    font-weight: 600;
  }

  .billing {
    margin-top: 20px;
    // position: relative;
  }
  .billing span {
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    top: -16px;
    left: 10px;
  }
  .billing select {
    height: 35px;
    width: 100%;
    font-size: 12px;
    outline: 0;
    padding-left: 5px;
    border: 1px solid #f6f6f7;
    cursor: pointer;
  }
  // .billing select option:nth-child(1) {
  //   display: none;
  // }
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
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .pay button {
    height: 40px;

    width: 100%;
    // background-color: #7047eb;

    width: 90vh;
    background-color: #7047eb;

    border: none;
    outline: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    transition: all 0.5s;
    transform: translate(-14%, -14%);
  }
  .pay button:hover {
    background-color: blue !important;
  }
</style>
