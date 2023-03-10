<script>
  import { RouterLink } from 'vue-router'

  export default {
    created() {
      localStorage.setItem('auth', false)
    },
    data() {
      return {
        email: '',
        password: '',
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      }
    },
    methods: {
      saveData() {
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
        if (
          this.email === 'admin@modestore.com' &&
          this.password === 'modestoreAdmin'
        ) {
          localStorage.setItem('auth', true)
          this.$router.push('/account')
        }
      }
    },
    components: {
      RouterLink
    }
  }
</script>

<template>
  <div>
    <h2>{{ $t('login.firstTitle') }}</h2>
    <form id="formlogin">
      <b-form-input
        class="loginInput"
        type="email"
        :placeholder="$t('login.email')"
        v-model="email"
        :state="regex.test(email) && email.length > 1 ? true : false"
      />
      <b-form-input
        class="loginInput"
        type="password"
        :placeholder="$t('login.password')"
        v-model="password"
        :state="password.length > 6 ? true : false"
      />
      <RouterLink to="/account/konto" id="linkLogin">
        <input
          @click="saveData"
          id="loginButton"
          type="button"
          :value="$t('login.login')"
      /></RouterLink>
    </form>
    <p class="passText">{{ $t('login.forgotten') }}</p>
    <h2>{{ $t('login.secondTitle') }}</h2>
    <RouterLink to="/signup">
      <input id="button" type="button" :value="$t('login.register')" />
    </RouterLink>
    <RouterLink to="/" id="guest">
      <p class="passText">Procide as guest</p>
    </RouterLink>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin: 50px 0 30px 10px;
    padding: 10px;
  }

  #formlogin {
    width: 100%;
    height: 30vh;
    margin: 20px 0;
    display: flex;
    flex-direction:column;
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
    width: 100%;
    background-color: #000;
    color: #fff;
    font-size: 11px;
    border: none;
    padding: 10px 150px;
    /* margin: 30px; */
  }
  /* #linkLogin {
    margin-left: 10%;

  } */
  .passText {
    width: 90%;
    height: 30px;
    margin: 20px 0 40px 10px;
    padding: 10px;
    font-size: 11px;
  }
  .passText:hover {
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
  #guest {
    text-decoration: none;
    color: #000;
  }

  @media (min-width: 980px) {
    h2 {
      font-size: 20px;
      margin: 40px 50px 0;
    }
    .passText {
      margin: 50px 0 40px 50px;
      font-size: 13px;
    }
    #loginButton {
      font-size: 15px;
      margin: 40px 0;
      padding: 10px 550px;
    }
    #button {
      font-size: 15px;
      margin-top: 30px;
    }
    #formlogin {
    width: 100%;
    height: 20vh;
    }
  }
</style>
