<template>
  <div>
    <h2>Register your card</h2>
    <form @submit.prevent="saveCard">
      <label>
        Card number:
        <input type="text" v-model="cardNumber" />
      </label>
      <label>
        Expiration date:
        <input type="text" v-model="expDate" />
      </label>
      <label>
        CVV:
        <input type="text" v-model="cvv" />
      </label>
      <button type="submit">Save card</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-else-if="successMessage">{{ successMessage }}</p>
    <p v-else>No card saved</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cardNumber: '',
        expDate: '',
        cvv: '',
        errorMessage: '',
        successMessage: ''
      }
    },
    methods: {
      saveCard() {
        localStorage.setItem('cardNumber', this.cardNumber)
        localStorage.setItem('expDate', this.expDate)
        localStorage.setItem('cvv', this.cvv)
        this.successMessage = 'Card saved'
      },
      loadSavedCard() {
        const cardNumber = localStorage.getItem('cardNumber')
        const expDate = localStorage.getItem('expDate')
        const cvv = localStorage.getItem('cvv')
        if (cardNumber && expDate && cvv) {
          this.cardNumber = cardNumber
          this.expDate = expDate
          this.cvv = cvv
          this.successMessage = 'Card loaded'
        } else {
          this.errorMessage = 'No saved card found'
        }
      }
    },
    mounted() {
      this.loadSavedCard()
    }
  }
</script>

<!--<template>
  <form @submit.prevent="saveCard">
    <label for="cardNumber">Card number:</label>
    <input type="text" id="cardNumber" v-model="cardNumber" required />
    <label for="expDate">Expiration date:</label>
    <input type="text" id="expDate" v-model="expDate" required />
    <label for="cvv">CVV:</label>
    <input type="text" id="cvv" v-model="cvv" required />
    <button type="submit">Save Card</button>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="successMessage">{{ successMessage }}</div>
  </form>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        cardNumber: '',
        expDate: '',
        cvv: '',
        errorMessage: '',
        successMessage: ''
      }
    },
    methods: {
      saveCard() {

        // Validate card information
        // Send data to the server
        axios
          .post('/api/save-card', {
            cardNumber: this.cardNumber,
            expDate: this.expDate,
            cvv: this.cvv
          })
          .then((response) => {
            this.successMessage = 'Card successfully saved'
          })
          .catch((error) => {
            this.errorMessage = 'Error saving card'
          })
      }
    }
  }
</script>
-->
