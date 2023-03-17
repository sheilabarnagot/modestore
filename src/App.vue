<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  // import LangBtn from './components/LangBtn.vue'
  // import FilterFetch from './components/Filter/FilterFetch.vue'
  // import SearchView from './views/SearchView.vue'
  // import SidebarMenu from './components/SidebarMenu.vue'

  import SidebarMenu from './components/Navigation/SidebarMenu.vue'
  import BonnieLogo from './components/bonnielogo/BonnieLogo.vue'

  export default {
    created() {
      this.getMyAge()
    },

    methods: {
      getMyAge() {
        const today = new Date()
        const current_year = today.getFullYear()
        const birthYear = 1992
        console.log(current_year - birthYear)
      }
    },
    components: {
      // SearchView,
      MobileMainNav,

      // SidebarMenu,

      BonnieLogo,
      SidebarMenu

      // Jag testar med branches Sheila
      //Klara was never here...
      //LangBtn
    }
  }
</script>

<template>
  <!-- <LangBtn />-->
  <BonnieLogo />
  <MobileMainNav />
  <SidebarMenu />

  <main>
    <RouterView />
  </main>
</template>
