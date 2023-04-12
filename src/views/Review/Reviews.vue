<template>
  <div>
    <h2>Lämna en recension</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Namn</label>
      <input type="text" id="name" v-model="name" required />
      <label for="rating">Betyg (1-5)</label>
      <input
        type="number"
        id="rating"
        v-model="rating"
        min="1"
        max="5"
        required
      />
      <label for="review">Recension</label>
      <textarea id="review" v-model="review" required />
      <button type="submit">Skicka</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        name: '',
        rating: null,
        review: '',
        error: ''
      }
    },
    methods: {
      ...mapActions(['addReview']), // lägger till addReview som en komponentmetod
      submitForm() {
        const review = {
          name: this.name,
          rating: this.rating,
          review: this.review
        }
        this.addReview(review)
          .then(() => {
            // Återställer formulärdata när recensionen har lagts till i storen
            this.name = ''
            this.rating = null
            this.review = ''
          })
          .catch((error) => {
            this.error = error.message
          })
      }
    }
  }
</script>
