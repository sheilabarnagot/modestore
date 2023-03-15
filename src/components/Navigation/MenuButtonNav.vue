<template>
  <ul>
    <li><RouterLink to="/">Dam</RouterLink></li>
    <li><RouterLink to="/">News</RouterLink></li>
    <li><RouterLink to="/">Jackets</RouterLink></li>
    <li><RouterLink to="/">Dresses</RouterLink></li>
    <li><RouterLink to="/">Tops</RouterLink></li>
    <li><RouterLink to="/">Bottoms</RouterLink></li>
  </ul>
  <RouterView />
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    position: absolute;
  }
  ul li {
    padding-left: 1em;
  }
  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }
</style>
