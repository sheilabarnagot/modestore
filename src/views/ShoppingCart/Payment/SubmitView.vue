<template>
  <button id="button">
    <RouterLink to="/shopping">{{ $t('fottsätt shoppa') }}</RouterLink>
  </button>

  <div class="hej">
    <p v-if="card - owner !== ''">{{ card - owner }}</p>
  </div>
</template>

<script>
  export default {
    created() {},

    data() {
      return {
        namn: ''
      }
    },

    methods: {
      submit() {
        this.feedbackSubmitted = true
        this.namn = 'Tack för din feedback '
      }
    }
  }
</script>

<style scoped>
  #button {
    position: absolute;
    display: flex;
    justify-content: center;

    top: 100px;
    border-bottom: solid 3px;
  }
</style>
