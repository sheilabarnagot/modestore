<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  export default {
    components: {
      NavbarComponent
    }
  }
</script>

<template>
  <NavbarComponent class="mobile-menu" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  @media (min-width: 428px) {
    .mobile-menu {
      display: none;
    }
  }
</style>
