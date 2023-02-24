<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  import SideBarMenu from './components/SideBarMenu.vue'
  export default {
    components: {
      NavbarComponent,
      SideBarMenu
    }
  }
</script>

<template>
  <NavbarComponent class="mobile-menu" />
<<<<<<< HEAD
=======
  <SideBarMenu />
>>>>>>> f25d6fee252f74365514ce8c56e50e09f5b3cd53
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
