<script>
  import { RouterLink } from 'vue-router'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      saveData() {
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
      }
    },
    components: {
      RouterLink
    }
  }
</script>

<template>
  <h2>{{ $t('login.firstTitle') }}</h2>
  <form id="formlogin">
    <input
      class="loginInput"
      type="email"
      :placeholder="$t('login.email')"
      v-model="email"
    />
    <input
      class="loginInput"
      type="password"
      :placeholder="$t('login.password')"
      v-model="password"
    />
    <input
      @click="saveData"
      id="loginButton"
      type="button"
      :value="$t('login.login')"
    />
  </form>
  <p id="passText">{{ $t('login.forgotten') }} </p>

  <h2>{{ $t('login.secondTitle') }}</h2>
  <RouterLink to="/signup">
    <input id="button" type="button" :value="$t('login.register')" />
  </RouterLink>
</template>

<style scoped>
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin: 20px 0 30px 0;
    padding: 10px;
  }
  #formlogin {
    width: 100%;
    height: 20vh;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .loginInput {
    width: 90%;
    border: none;
    border-bottom: 1px solid #000;
  }
  .loginInput:focus {
    outline: none;
  }
  #loginButton {
    width: 90%;
    background-color: #000;
    color: #fff;
    font-size: 11px;
    border: none;
    padding: 10px;
    margin-top: 20px;
  }
  #passText {
    width: 90%;
    height: 30px;
    margin: 20px 0 40px;
    padding: 10px;
    font-size: 11px;
  }
  #passText:hover {
    text-decoration: underline;
  }
  #button {
    margin: 0 5%;
    width: 90%;
    background-color: #fff;
    color: #000;
    font-size: 11px;
    border: none;
    border: 1px solid #000;
    padding: 10px;
  }

  @media (min-width: 980px) {
    h2 {
      font-size: 20px;
      margin: 20px 30px 0;
    }
    #passText {
      margin: 20px 70px 40px;
      font-size: 15px;
    }
    #loginButton {
      font-size: 15px;
    }
    #button {
      font-size: 15px;
      margin-top: 30px;
    }
  }
</style>
