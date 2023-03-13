<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        name: '',
        surname: ''
      }
    },
    methods: {
      saveInfo() {
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
        localStorage.setItem('auth', true)
      }
    }
  }
</script>
<!-- In the data object, each property is initialized with an empty string.

The expression validates a string containing an email address according to the specified pattern. And below I use the same type of function that in the login view.

*The code does not perform any server-side validation, which could be a security risk in a real web application.
 -->

<template>
  <h2>{{ $t('signup.firstTitle') }}</h2>
  <form id="formSignup">
    <b-form-input
      class="loginInput"
      type="email"
      :placeholder="$t('signup.email')"
      v-model="email"
      :state="regex.test(email) && email.length > 1 ? true : false"
    />
    <b-form-input
      class="loginInput"
      type="password"
      :placeholder="$t('signup.password')"
      v-model="password"
      :state="password.length > 6 ? true : false"
    />
    <b-form-input
      class="loginInput"
      type="password"
      :placeholder="$t('signup.passwordR')"
      :state="password.length > 6 ? true : false"
    />
    <b-form-input
      class="loginInput"
      type="text"
      :state="name.length > 3 ? true : false"
      :placeholder="$t('signup.name')"
      v-model="name"
    />
    <b-form-input
      class="loginInput"
      type="text"
      :state="surname.length > 3 ? true : false"
      :placeholder="$t('signup.surname')"
      v-model="surname"
    />
  </form>
  <div id="radiobuttons">
    <div class="radioButton">
      <input class="radio" type="checkbox" />
      <p class="text">{{ $t('signup.communications') }}</p>
    </div>
    <div class="radioButton">
      <input class="radio" type="checkbox" />
      <p class="text">{{ $t('signup.cookies') }}</p>
    </div>
    <RouterLink to="/account/konto">
      <input
        @click="saveInfo"
        id="signupButton"
        type="button"
        :value="$t('signup.createAccount')"
    /></RouterLink>
  </div>
</template>

<!-- Each input field has real-time validation using the :state directive to show if the entered value is valid.

There are also two check boxes to accept communications and cookies (they are faked)

When the "Create Account" button is clicked, the saveInfo() function is triggered and the email and password are saved to local storage.
 -->

<style scoped>
  /* The page has been styled from the mobile first 375px */
  h2 {
    font-size: 15px;
    font-weight: 700;
    margin: 40px 0 0 10px;
    padding: 10px;
  }
  #formSignup {
    width: 100%;
    height: 30vh;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red */
  }
  .loginInput {
    width: 90%;
    border: none;
    border-bottom: 1px solid #000;
  }
  .loginInput:focus {
    outline: none;
  }
  #signupButton {
    margin: 35px 5%;
    width: 90%;
    background-color: #fff;
    color: #000;
    font-size: 11px;
    border: none;
    border: 1px solid #000;
    padding: 10px;
  }
  .radioButton {
    width: 90%;
    margin-left: 5%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* border: 1px solid red; */
  }
  .radio {
    width: 15px;
    height: 15px;
    margin: 20px 6px 0 20px;
    appearance: none;
    border: 2px solid #000;
  }
  .radio:checked {
    background-color: #000;
  }
  .text {
    font-size: 13px;
    margin: 18px 0 0 4px;
  }
  @media (min-width: 980px) {
    .radioButton {
      width: 90%;
      margin-left: 5%;
      height: 7vh;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      /* border: 1px solid red; */
    }
    #signupButton {
      width: 30%;
      margin: 10px 0 0 35%;
    }
  }
</style>
