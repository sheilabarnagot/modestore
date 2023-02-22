<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/account/kop">Köp</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/konto">Konto</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/favourites">favoriter</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/help">Hjälp</RouterLink>
      </li>
      <li>
        <RouterLink to="/account/settings">Inställningar</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
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
</style>
