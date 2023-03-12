<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  import LangBtn from './components/LangBtn.vue'
  // import FilterFetch from './components/Filter/FilterFetch.vue'
  import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'
  export default {
    components: {
      SearchView,
      MobileMainNav,
      // SearchView
      // SidebarMenu
      // Jag testar med branches Sheila
      //Klara was never here...
      LangBtn
    }
  }
</script>

<template>
  <LangBtn id="test" />
  <MobileMainNav />
  <SearchView />
  <!-- <SidebarMenu /> -->

  <main>
    <RouterView />
  </main>
</template>
