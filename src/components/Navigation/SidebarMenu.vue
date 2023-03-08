<!--for screen 768 and up -->
<template>
  <div class="menu-icon tablet-menu" @click="toggleMenu">
    <div class="icon"><HamburgerMenu /></div>
  </div>
  <div
    :style="{ width: isOpenWidth, transition: firstTransitsion }"
    class="sidebar-menu"
  >
    <template v-if="isOpen">
      <div v-for="category in categories" :key="category.id" class="menu-items">
        <div>
          <RouterLink to="/">{{ $t(category.name) }}</RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import HamburgerMenu from '../SvgIcons/HamburgerMenu.vue'
  export default {
    components: {
      HamburgerMenu
    },
    data() {
      return {
        isOpen: false,
        isOpenWidth: '0',
        firstTransitsion: '0.5s',
        categories: [
          { id: 1, name: 'female' },
          { id: 2, name: 'jackets' },
          { id: 3, name: 'tops' },
          { id: 4, name: 'bottoms' },
          { id: 5, name: 'dresses' },
          { id: 6, name: 'about' }
        ]
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen

        this.isOpenWidth === null || this.isOpenWidth === '0'
          ? (this.isOpenWidth = '250px')
          : (this.isOpenWidth = '0')
      }
    }
  }
</script>

<style scoped lang="scss">
  .sidebar-menu {
    height: 100%; /* 100% Full-height */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #f6f6f7; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  .menu-icon {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 16px;
    margin-left: 25px;
    z-index: 2;
  }

  .menu-items {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .menu-items div {
    padding: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    .tablet-menu {
      display: none;
    }
  }
</style>
