<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  import LangBtn from './components/LangBtn.vue'
  // import FilterFetch from './components/Filter/FilterFetch.vue'
  // import SearchView from './views/SearchView.vue'
  import SidebarMenu from './components/Navigation/Sidebarmenu.vue'
  export default {
    components: {
      // SearchView,
      MobileMainNav,
      SidebarMenu,
      // Jag testar med branches Sheila
      //Klara was never here...
      LangBtn
    }
  }
</script>

<template>
  <LangBtn />
  <MobileMainNav />
  <!-- <SearchView /> -->
  <SidebarMenu />

  <main>
    <RouterView />
  </main>
</template>
