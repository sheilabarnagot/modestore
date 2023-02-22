<script>
  export default {
    components: {}
  }
</script>

<template>
  <BetalningKomponent />
  <nav>
    <ul>
      <li>
        <RouterLink to="/cart">Cart</RouterLink>
      </li>
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
