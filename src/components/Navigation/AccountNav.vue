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
  <div id="divLogout">
    <RouterLink to="/">
      <button id="logout" @click="logout">Logout</button>
    </RouterLink>
  </div>
</template>

<style scoped>
  ul {
    margin: 30px;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  ul li {
    padding-left: 1em;
  }

  ul li:first-child {
    padding-left: 0em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
    color: #3c3e3f;
  }
  #logout {
    width: 100%;
    background-color: #3c3e3f;
    color: #fff;
    font-size: 0.8em;
    border: none;
    padding: 10px;
  }
  #divLogout {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3c3e3f;
    font-size: 1.5em;
  }
  @media (min-width: 980px) {
    #logout {
      margin: 2;
      font-size: 1em;
    }
    #divLogout {
      justify-content: center;
    }
  }
</style>
