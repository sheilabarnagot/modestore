<script>
  export default {
    data() {
      return {
        userName: 'John Doe'
      }
    }
  }
</script>

<template>
  <div id="container">
    <h1>{{ userName }}</h1>
    <ul>
      <li><RouterLink to="/">Adresser</RouterLink></li>
      <li><RouterLink to="/">Plånbok</RouterLink></li>
      <li><RouterLink to="/">E-post</RouterLink></li>
      <li><RouterLink to="/">Lösenord</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
  #container {
    height: 100vh;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    height: 100%;
  }
</style>
