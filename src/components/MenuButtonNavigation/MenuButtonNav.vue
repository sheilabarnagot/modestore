<template>
  <ul>
    <li><RouterLink to="/menu/dam">Dam</RouterLink></li>
    <li><RouterLink to="/menu/herr">herr</RouterLink></li>
    <li><RouterLink to="/menu/shopping">SHOPPING</RouterLink></li>
    <li>Home</li>
    <li>Beauty</li>
  </ul>
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
