<script>
import FilterFetch from './components/Filter/FilterFetch.vue';
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  // import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      MobileMainNav,
      FilterFetch
      // SearchView
      // SidebarMenu
    }
  }
</script>

<template>
  <MobileMainNav />
  <FilterFetch />
  <!-- <SearchView /> -->
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
