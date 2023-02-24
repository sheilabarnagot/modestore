<!--for screen 768 and up -->
<template>
  <div class="sidebar-menu">
    <div class="menu-icon" @click="toggleMenu">
      <div class="icon"><HamburgerMenu /></div>
    </div>
    <template v-if="isOpen">
      <div class="menu-items">
        <div v-for="category in categories" :key="category.id">
          <RouterLink :to="`/category/${category.id}`">{{
            category.name
          }}</RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import HamburgerMenu from './SvgIcons/HamburgerMenu.vue'
  export default {
    components: {
      HamburgerMenu
    },
    data() {
      return {
        isOpen: false,
        categories: [
          { id: 1, name: 'T-shirts' },
          { id: 2, name: 'Jeans' },
          { id: 3, name: 'Sweaters' },
          { id: 4, name: 'Dresses' }
        ]
      }
    },

    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
  .sidebar-menu {
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    border: 2px solid grey;
  }

  .sidebar-menu.open {
    transform: translateX(0%);
  }

  .menu-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
  }

  .menu-items {
    margin-top: 3rem;
    padding: 0 1rem;
    text-align: center; /* add text-align center */
  }

  .menu-items div {
    padding: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .sidebar-menu {
      width: 30%;
    }
    .menu-items {
      text-align: left; /* remove text-align center */
    }
  }
</style>
