<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      MobileMainNav
      // SidebarMenu
    }
  }
</script>

<template>
  <MobileMainNav />
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
