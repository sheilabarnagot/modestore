<template>
  <p id="didot">Detta är didot</p>
  <p id="jost">Detta är jost</p>
  <p id="couture">
    Detta är couture -
    <span id="couture-info">verkar inte som åäö fungerar</span>.
  </p>
</template>

<style scoped>
  #didot {
    font-family: 'didot';
  }
  #jost {
    font-family: 'jost';
  }

  #couture {
    font-family: 'couture';
  }

  p {
    font-size: 4em;
  }

  #couture-info {
    font-size: 0.5em;
    color: orange;
  }
</style>
