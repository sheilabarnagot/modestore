<!--KZ custumer can registrate card in my account and save. So in checkout it will automatically be picked from local storage-->
<!--<template>
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
-->
