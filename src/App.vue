<script>
  import FilterFetch from './components/Filter/FilterFetch.vue'
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  import LangBtn from './components/LangBtn.vue'
  // import FilterFetch from './components/Filter/FilterFetch.vue'
  // import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      MobileMainNav,
      FilterFetch,
      LangBtn
      // SearchView
      // SidebarMenu
    }
  }
</script>

<template>
  <LangBtn />
  <MobileMainNav />
  <FilterFetch />
  <!-- <SearchView /> -->
  <!-- <SidebarMenu /> -->
  <main>
    <RouterView />
  </main>
</template>
