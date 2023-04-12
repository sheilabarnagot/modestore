<template>
  <div>
    <BonnieLogo />
    <MobileMainNav />
    <SidebarMenu />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  import SidebarMenu from './components/Navigation/SidebarMenu.vue'
  import BonnieLogo from './components/bonnielogo/BonnieLogo.vue'

  export default {
    name: 'App',

    components: {
      MobileMainNav,
      SidebarMenu,
      BonnieLogo
    }
  }
</script>
