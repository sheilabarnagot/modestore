<script>
  import FilterFetch from './components/Filter/FilterFetch.vue'
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  // import FilterFetch from './components/Filter/FilterFetch.vue'
  // import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      MobileMainNav,
      FilterFetch
      // SearchView
      // SidebarMenu
      //Klara was never here...
    }
  }
</script>

<template>
  <!-- Pontus was here -->
  <MobileMainNav />
  <FilterFetch />
  <!-- <SearchView /> -->
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
