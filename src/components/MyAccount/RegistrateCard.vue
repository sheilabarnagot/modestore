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
