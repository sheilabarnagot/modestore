<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  export default {
    components: {
      NavbarComponent
    }
  }
</script>

<template>
  <NavbarComponent />
  <main>
    <RouterView />
  </main>
</template>
