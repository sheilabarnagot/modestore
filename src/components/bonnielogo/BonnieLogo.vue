<template>
  <RouterLink to="/" class="bonnie">BONIE</RouterLink>
</template>

<style scoped>
  .bonnie {
    color: #47413d;
    position: absolute;
    top: -2%;
    margin: 50px 40px;
    font-size: 1.8rem;
    text-decoration: none;
    /* z-index: 999; */
  }

  @media (min-width: 601px) {
    .bonnie {
      position: absolute;
      margin: 50px 60px;
      font-size: 2.2rem;
    }
  }
  @media (min-width: 768px) {
    .bonnie {
      position: absolute;
      margin: 40px 60px;
      font-size: 2.5rem;
    }
  }
</style>
