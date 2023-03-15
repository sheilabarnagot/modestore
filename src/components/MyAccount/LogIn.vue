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
<!-- “LOGIN” code that implements authentication functionality for the app using local storage and Vue Router

Created runs after the component has been created and its data state has been set, but before it has been rendered in the DOM set the "auth" authentication token to "false" in localStorage.

Data, define three values: email, password, and regex. The "regex" variable is a regular expression used to validate the format of the email.

The SaveData method, save the email and password values to local storage.
Then, check if the email and password entered match the email and password of the predefined administrator (admin@modestore.com and modestoreAdmin).
If so, set the auth token to "true" in local storage and redirect the user to the account page using Vue Router's "$router.push" function.

Also imports the "RouterLink" component from Vue Router and registers it as a component of the current component.
 -->

<template>
  <div id="signup">
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
      <div id="containerLogin">
        <RouterLink to="/account/konto" id="linkLogin">
          <input
            @click="saveData"
            id="loginButton"
            type="button"
            :value="$t('login.login')"
        /></RouterLink>
      </div>
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
<!-- Login view in app. Bootstrap-Vue package are used.

The entire content of the template is wrapped inside a div.

Inside the div, there is two h2 header that shows the title of the login sections “login” and “Registration”.

Input fields use the v-model directive to bind user input data to the email and password component properties. They also use the :state directive to change the validation state of the field, depending on the value of the email and password properties. The validation state is based on a ternary expression that uses the regex and password.length properties defined in the component.

RouterLink is use to link the user to the account page if the email and password are valid. The link contains a login button input that calls the saveData() method on the click event. Also, I have use RouterLink that takes the user to the main page of the application if they want to naigate as a guest and one more link takes the user to the registration page if they want to create an account.


* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

 -->

<!-- The page has been styled from the mobile first 375px -->
<style scoped>
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin: 50px 0 30px 10px;
    padding: 10px;
  }
  #signup {
    margin: 7em 0;
  }

  #formlogin {
    width: 100%;
    height: 30vh;
    margin: 20px 0;
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
  #containerLogin {
    width: 90%;
  }

  @media (min-width: 980px) {
    h2 {
      font-size: 20px;
      margin: 40px 50px 0;
    }
    /* #containerLogin {
      width: 100%;
    } */
    .passText {
      margin: 50px 0 40px 50px;
      font-size: 13px;
    }
    #loginButton {
      font-size: 15px;
      margin: 40px 0;
      /* padding: 10px 660px; */
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
