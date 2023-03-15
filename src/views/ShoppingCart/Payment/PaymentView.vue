<template>
  <!-- <div class="bcard"> -->
      <!-- <b-card title="Card title" sub-title="Card subtitle" /> -->
      <!-- <h4>Payment: {{ Payment }}</h4> -->


    <!-- <b-card title="Card title" sub-title="Card subtitle" /> -->
    <!-- <div class="container2">

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


  </div> -->






<div class="paybutton">
    <!-- <div class="swisha" v-if="Payment === 'Swish'">
      <b-button class="btn" @click="modalShowswish = !modalShowswish"
        >Swish
      </b-button>

      <b-modal
        title="Swish With Phone Number or Scan"
        v-model="modalShowswish"
        name="swishmodel"
        :no-close-on-backdrop="true"
      >
        <img src="../../../../assets/swish.png" alt="" class="swishlogo" />

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
    </div> -->

    <!-- <div class="kort" v-if="Payment === 'Creditcard'">
      <b-button class="btn" @click="modalShowkort = !modalShowkort"
        >Creditcard
      </b-button>

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
              type="password"
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
              <img src="assets/mastercardlogo.jpeg" alt="" class="logo" />
            </div>
          </div>
        </div>
        <b-button
         :disabled="submitButtonDisabled"
          href="#/submit"
          variant="primary"
          modalShowkort:> Submit
          </b-button>
        <p v-if="showErrorMessage" style="color: red;">Please enter text!</p>

      </b-modal>

    </div>

    <div class="Fakturan" v-if="Payment === 'Faktura'">
      <b-button class="btn" @click="modalShowfaktura = !modalShowfaktura"
        >Invoice
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
       :disabled="regex.test(email) === false "
        href="#/submit"
        variant="primary"
        modalShowfaktura:>Submit

          </b-button
        >
        <p v-if="(regex.test(email)) === false" style="color: red;">Please enter your Email!</p>
      </b-modal>
    </div> -->
  <!-- </div> -->




<!-- gammla checkout ---------------------------------------------------->
  <!-- <div class="row">
    <div class="col-75">
      <div class="container">

        <div class="row">
          <div class="col-50">
            <h5>Shipping Address</h5>
            <label for="fname"><i class="fa fa-user" /> Full Name</label>

            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="John M. Doe"
              v-model="fname"

            />


            <label for="email"><i class="fa fa-envelope" /> Email</label>

            <input
              type="text"
              id="emailSH"
              name="email"
              placeholder="john@example.com"
              v-model="emailSH"
              @blur="checkInput"
            />


            <label for="adr"><i class="fa fa-address-card-o" /> Address</label>

            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
              v-model="adr"


            />

            <label for="city"><i class="fa fa-institution" /> City</label>

            <input
            type="text" id="city" name="city" placeholder="New York" v-model="city"

            />


            <div class="row">
              <div class="col-50">
                <label for="state">State</label>

                <input
                type="text" id="state" name="state" placeholder="NY" v-model="state"

                 />


              </div>
              <div class="col-50">
                <label for="zip">Zip</label>

                <input
                type="text" id="zip" name="zip" placeholder="10001" v-model="zip"

                />


              </div>
            </div>
          </div>


          <b-button
          :disabled="isDisabled"

          href="#/submit"
          variant="primary"
          @click="checkInp">
          {{ isDisabled ? "Error" : "confirm" }}
          </b-button>
          <p v-if="isDisabled">All fields are required.</p>
          <p v-if="isConfirmd">Form submitted successfully!</p>

        </div>

      </div>
    </div>

    <div class="col-25">
      <div class="container">
        <h4>
          Cart

        </h4>

        Totalcost: {{ $store.state.totalCost }}

      </div>
    </div>
  </div> -->
  <!-- gamla checkout -------------------------------------------->

  <!----------- Shipping ----------->
  <div class="container5">
    <div class="card">
        <div class="payment-details">
            <h3>Shipping adress</h3>
            <p>Complete your purchase by providing your payment details.</p>
        </div>
        <div class="input-text">
            <b-form-input type="text" placeholder="Ex Alexandra jon" v-model="input1" :state="input1.length >= 4 ? true : false" />
              <span>Name</span>
            <div v-if="notEmpty">
              <p>{{ tack }}</p>
            <!-- <p>Please fill in all input fields.</p> -->
    </div>
        </div>
        <div class="input-text">
            <b-form-input
            type="text" placeholder="luke@skywalker.com"
            v-model="input2" :state="input2.length >= 4 ? true : false" />
            <div v-if="notEmpty">
            <span>Email</span>
        </div>

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
                    type="text" placeholder="ZIP"
                    v-model="input3" :state="input3.length >= 4 ? true : false" />
                    <div v-if="notEmpty" />
                </div>
                <div class="state">
                  <b-form-input type="text" placeholder="State" v-model="input5" :state="input5.length >= 4 ? true : false" />
                    <div v-if="notEmpty" />

                </div>

            </div>
        </div>
        <div class="input-text">
            <b-form-input
            type="text" placeholder="123 main st"
            v-model="input4" :state="input4.length >= 4 ? true : false" />
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
<!-- häääärf -->


<div v-if="notEmpty" />


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

    <div class="kort" v-if="Payment === 'Creditcard'">
      <b-button class="btn" @click="modalShowkort = !modalShowkort"
        >Creditcard
      </b-button>

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
              type="password"
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
              <img src="assets/mastercardlogo.jpeg" alt="" class="logo" />
            </div>
          </div>
        </div>
        <b-button
         :disabled="submitButtonDisabled"
          href="#/submit"
          variant="primary"
          modalShowkort:> Submit
          </b-button>
        <p v-if="showErrorMessage" style="color: red;">Please enter text!</p>

      </b-modal>

    </div>

    <div class="Fakturan" v-if="Payment === 'Faktura'">
      <b-button class="btn" @click="modalShowfaktura = !modalShowfaktura"
        >Invoice
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
       :disabled="regex.test(email) === false "
        href="#/submit"
        variant="primary"
        modalShowfaktura:>Submit

          </b-button
        >
        <p v-if="(regex.test(email)) === false" style="color: red;">Please enter your Email!</p>
      </b-modal>
    </div>



        <div class="pay">
            <button v-if="!isAnyInputEmpty">Submit</button>
        </div>
        <div class="message">
        <p>Please fill in all input fields.</p>
        <!-- <p v-if="isDisabled">All fields are required.</p>
        <p v-if="isConfirmd">Form submitted successfully!</p> -->
      </div>

        <div class="last">
            <p>BONIE</p>
            <a href="#"> Homepage </a>

        </div>



    </div>

</div>


</div></div></div></div></template>

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
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      tack: 'tacajajjajja'
      // input1Valid: true,
      // input2Valid: true,
      // errorMessage: ''
      // showErrorMessageShipp: false,

    };
  },


  computed: {
    submitButtonDisabled() {
      return this.cardowner === '' || this.kortnummer === '' || this.CVC === ''

      // && this.kortnummer === '' && this.CVC === '';
    },
    showErrorMessage() {
      return this.submitButtonDisabled && (this.cardowner !== '' || this.kortnummer !== '' || this.CVC !== '')
    },
    isDisabled() {
      return !this.input1;
    },
    showInput1Error() {
      return !this.input1 && !this.input1Valid;

    },
    notEmpty() {
      return this.input1 && this.input2 && this.input3 && this.input4 && this.input5
    },

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
//  #Payment{
//     // min-height:100vh;
//     // background-color:#f7f7f9;
//     // display:flex;
//     justify-content:center;
//     // align-items:center;
//     margin-right:300px ;
//     position: absolute;
//     display: block;
//     width:500px;
//     border-radius:10px;
//     background-color:#fff;
//     padding:0 25px;
//     box-sizing:border-box;
//   }

  .AA{
    // min-height:100vh;
    // background-color:#f7f7f9;
    // display:flex;
    justify-content:center;
    // align-items:center;
    margin-right:300px ;
    position: absolute;
    display: block;
    width:500px;
    border-radius:10px;
    background-color:#fff;
    padding:0 25px;
    box-sizing:border-box;
  }




  .container2 {
    display: flex;
    flex-direction: row;

    // display: block ;
    // justify-content: center;


  }

  .box2{
    // position: absolute;
    // display: flex;
    // justify-content: center;
    // width: 100%;
    // top: 200px;
    // margin-bottom: 50px;
    // color: #464343;
    // margin-left: 520px;
    // margin-top: 10px;
    // border: 1px solid black;
  // padding: 20px;

   height: 80px;
   margin: 10px;

  }

  .btn{
    height: 40px;
   margin: 9px;
   margin-right: 220px;

  }

  // .fakturapayment {
  //   position: absolute;
  //   display: flex;
  //   justify-content: center;
  //   width: 100%;
  //   top: 250px;
  //   color: #464343;
  //   margin-left: 520px;
  //   margin-top: 10px;
  // }

  // .cardPayment {
  //   position: absolute;
  //   display: flex;
  //   justify-content: center;
  //   width: 100%;
  //   top: 150px;
  //   margin-top: 150px;
  //   color: #464343;
  //   margin-left: 520px;
  //   margin-top: 160px;
  // }

  .swisha {
    width: 100%;
    top: 400px;
  }

  .Fakturan {
    width: 10%;
    top: 400px;
  }

  .kort {
    width: 10%;
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
    margin: 6px 6px 0 0;
    margin-left: 6px;
    appearance: none;
    border: 2px solid #000;
  }
  #form:checked {
    background-color: #464343;
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

  // .totalcost {
  //   position: absolute;
  //   display: flex;
  //   justify-content: center;
  //   width: 100%;
  //   top: 500px;
  //   color: #464343;
  // }
  // .submit1 {
  //   background-color: #464343;
  //   justify-content: center;
  //   margin-left: 350px;
  // }
  // .submit2 {
  //   background-color: #464343;
  //   justify-content: center;
  //   margin-left: 370px;
  //   margin-top: 20px;
  // }

  // .row {
  //   display: -ms-flexbox; /* IE10 */
  //   display: flex;
  //   -ms-flex-wrap: wrap; /* IE10 */
  //   flex-wrap: wrap;
  //   margin: 0 -16px;
  // }

  // .col-25 {
  //   -ms-flex: 25%; /* IE10 */
  //   flex: 25%;
  // }

  // .col-50 {
  //   -ms-flex: 50%; /* IE10 */
  //   flex: 50%;
  // }

  // .col-75 {
  //   -ms-flex: 75%; /* IE10 */
  //   flex: 75%;
  // }

  // .col-25,
  // .col-50,
  // .col-75 {
  //   padding: 0 10px;
  // }

  // .container {
  //   background-color: #f5f5f5;
  //   padding: 5px 20px 15px 20px;
  //   border: 1px solid lightgrey;
  //   border-radius: 5px;
  //   margin-top: 20px;
  //   max-width: 500px;
  // }

  // input[type='text'] {
  //   width: 100%;
  //   margin-bottom: 20px;
  //   padding: 12px;
  //   border: 1px solid #ccc;
  //   border-radius: 3px;
  // }

  // label {
  //   margin-bottom: 10px;
  //   display: block;
  // }

  // .icon-container {
  //   margin-bottom: 20px;
  //   padding: 7px 0;
  //   font-size: 24px;
  // }

  // .btn {
  //   background-color: grey;
  //   color: white;
  //   padding: 12px;
  //   margin: 10px 0;
  //   border: none;
  //   width: 100%;
  //   border-radius: 3px;
  //   cursor: pointer;
  //   font-size: 17px;
  // }

  // .btn:hover {
  //   background-color: #45a049;
  // }

  // span.price {
  //   float: right;
  //   color: grey;
  // }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
  // @media (max-width: 800px) {
  //   .row {
  //     flex-direction: column-reverse;
  //   }
  //   .col-25 {
  //     margin-bottom: 20px;
  //   }
  // }

  // här slutar den------------
//   *{
//     margin:0;
//     padding:0;
// }

.container5{
    max-height:100vh;
    // background-color:#f7f7f9;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 10px;

}



.card{
    // height:auto;
    width:100vh;
    border-radius:10px;
    background-color:#fff;
    padding:0 25px;
    box-sizing:border-box;
    height: 85vh;

}
.message{
  position: fixed;
  margin-top: 150px;

}
.payment-details{
    margin-top:20px;
}
.payment-details p{
    font-size:12px;
    font-weight:700;
    color:#89898e;
}
.input-text{
    position:relative;
    margin-top:30px;
}
input[type="text"]{

    height:40px;
    width:100%;
    border-radius:5px;
    border:none;
    outline:0;
    border:1px solid #f6f6f7;
    padding:0 10px;
    box-sizing:border-box;
    font-size:12px;
}
.input-text span{
    position:absolute;
    top:-16px;
    left:10px;
    font-size:12px;
    font-weight:600;
}


.billing{
    margin-top:30px;
    position:relative;
}
.billing span{
    font-size:12px;
    font-weight:700;
    position:absolute;
    top:-16px;
    left:10px;
}
.billing select{
    height:35px;
    width:100%;
    font-size:12px;
    outline:0;
      padding-left:5px;
      border:1px solid #f6f6f7;
      cursor:pointer;
}
.billing select option:nth-child(1){
    display:none;

}
.zip-state{
    display:flex;
    width:100%;
}
.zip{
    width:50%;
}
.zip input[type="text"]{
    height:40px;
}
.state{
    width:50%;
}

.text-data p{
    margin-top:3px;
    font-size:12px;
    font-weight:600;
}

.pay{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
}
.pay button{
    height:40px;
    width:100%;
    background-color:#7047eb;
    border:none;
    outline:0;
    border-radius:5px;
    color:#fff;
    font-size:12px;
    cursor:pointer;
    transition:all 0.5s;
}
.pay button:hover{
    background-color:blue !important;
}
.secure{
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    /*text-align:center;*/
    color:#aeaebc;
}
.secure p{
    font-size:12px;
    font-weight:600;
    color:#aeaebc;
    margin-left:5px;
}
.last{
    margin-top:250px;

    justify-content:center;
    align-items:center;
    font-size:12px;
    font-weight:700;
}
.last p{
    margin-right:5px;
}
.last a{
    color:blue;
    text-decoration:none;
    margin-left:5px;
    cursor:pointer;
}
</style>
