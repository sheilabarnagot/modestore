<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  // import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      MobileMainNav
      // SearchView
      // SidebarMenu
    }
  }
</script>

<template>
  <MobileMainNav />
  <!-- <SearchView /> -->
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
