<script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('auth')
      }
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/account/konto">{{ $t('navbar.konto') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/favourites">{{
          $t('navbar.favoriter')
        }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/help">{{ $t('navbar.hjälp') }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/settings">{{
          $t('navbar.Inställningar')
        }}</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
  <p id="welcomeLogin">
    Hi,you are now logged in. Welcome to MODESTORE! From your private account
    you can access different products from the store, you can save the clothes
    that you like the most and much more. Enjoy!
  </p>
  <RouterLink to="/">
    <button id="logout" @click="logout">Logout</button>
  </RouterLink>
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  ul li {
    padding-left: 1em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }
  #logout {
    margin: 0 5%;
    width: 90%;
    background-color: #000;
    color: #fff;
    font-size: 11px;
    border: none;
    border: 1px solid #000;
    margin-top: 40px;
    padding: 10px;
  }
</style>
