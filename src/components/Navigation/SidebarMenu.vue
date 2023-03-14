<!--KZ menu/navigation for screens 768 and up -->
<template>
  <nav>
    <div class="menu-icon tablet-menu" @click="toggleMenu">
      <div class="icon"><StyledHamburger /></div>
    </div>
    <div
      :style="{ width: isOpenWidth, transition: firstTransitsion }"
      class="sidebar-menu"
    >
      <template v-if="isOpen">
        <div
          v-for="category in categories"
          :key="category.id"
          class="menu-items"
        >
          <div>
            <RouterLink to="/">{{ $t(category.name) }}</RouterLink>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<script>
  import StyledHamburger from '../SvgIcons/StyledHamburger.vue'
  //import CloseMenuIcon from '../SvgIcons/CloseMenuIcon.vue'
  export default {
    components: {
      StyledHamburger
      // CloseMenuIcon
    },
    data() {
      return {
        isOpen: false,
        isOpenWidth: '0',
        firstTransitsion: '0.5s',
        categories: [
          { id: 1, name: 'News' },
          { id: 2, name: 'Jackets' },
          { id: 3, name: 'Tops' },
          { id: 4, name: 'Bottoms' },
          { id: 5, name: 'Dresses' },
          { id: 6, name: 'About' }
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
  nav {
    display: none;
  }
  .sidebar-menu {
    height: 100%; /* 100% Full-height */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #eeece5; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 100px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    // color: #47413d;
  }

  .menu-icon {
    position: absolute;
    top: 40px;
    left: 20px;
    font-size: 16px;
    margin-left: 10px;
    z-index: 2;
  }

  .menu-items {
    padding: 8px 8px 8px 40px;
    text-decoration: none;
    font-size: 16px;
    color: #47413d;
    display: block;
    transition: 0.3s;
  }

  .menu-items div {
    padding: 0.5rem 0;
    margin: 10 0;
    font-size: 1rem;
    font-weight: lighter;
  }
  //line under the links to show where you are
  .menu-items div::after {
    content: '';
    display: block;
    //position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(60%);
    width: 15px;
    height: 0;
    background-color: #818c85;
    transition: height 0.3s ease;
  }
  .menu-items div:hover::after,
  .menu-items div.active::after {
    height: 2px;
  }

  .menu-items a {
    color: #47413d;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .menu-items a:hover {
    color: #818c85;
  }

  @media (min-width: 601px) {
    nav {
      display: block;
    }
  }
</style>
