<script>
  // import CitiesList from './components/CitiesList.vue'
  // import CounterButton from './components/CounterButton.vue'
  // import HelloWorld from './components/HelloWorld.vue'

  // import FontExamples from './components/FontExamples.vue'
  // import AccountView from './views/AccountView.vue'

  export default {
    components: {
      // CitiesList,
      // CounterButton,
      // HelloWorld
      // FontExamples,
      // AccountView
    }
  }
</script>

<template>
  <!-- <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav> -->
  <!-- <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton /> -->
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
    <!-- <FontExamples /> -->
    <RouterView />
  </main>
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    position: absolute;
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
