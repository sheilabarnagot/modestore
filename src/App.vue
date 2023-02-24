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
  <SideBarMenu />
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
