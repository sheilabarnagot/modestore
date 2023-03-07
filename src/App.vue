<script>
  import NavbarComponent from './components/MenuButtonNavigation/NavbarComponent.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      NavbarComponent
      // SidebarMenu
    }
  }
</script>

<template>
  <NavbarComponent />
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
