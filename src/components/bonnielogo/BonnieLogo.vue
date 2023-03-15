<template>
  <RouterLink to="/" class="bonnie">BONIE</RouterLink>
</template>

<style scoped>
  .bonnie {
    color: #47413d;
    position: absolute;
    top: -3%;
    margin: 50px 40px;
    font-size: 2.5rem;
    text-decoration: none;
    z-index: 999;
  }

  @media (min-width: 601px) {
    .bonnie {
      position: absolute;
      margin: 40px 100px;
      font-size: 3.5rem;
    }
  }
  @media (min-width: 768px) {
    .bonnie {
      position: absolute;
      margin: 40px 100px;
      font-size: 4rem;
    }
  }
</style>
