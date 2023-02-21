<script></script>

<template>
  <BetalningKomponent />
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Sök</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Menu</RouterLink>
      </li>
      <li>
        <RouterLink to="/account">Konto</RouterLink>
      </li>
      <li>
        <RouterLink to="/">Hjälp</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    position: fixed;

    bottom: 0;
    left: 50%;
    right: 50%;
  }

  ul li {
    padding-left: 1em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }
</style>
