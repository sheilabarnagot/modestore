<script>
  import HomeIcon from './SvgIcons/HomeIcon.vue'
  import SearchIcon from './SvgIcons/SearchIcon.vue'
  import UserIcon from './SvgIcons/UserIcon.vue'
  import ShoppingIcon from './SvgIcons/ShoppingIcon.vue'
  export default {
    data() {
      return {
        toggleSearch: false,
        modal: false
      }
    },
    components: {
      HomeIcon,
      SearchIcon,
      UserIcon,
      ShoppingIcon
    },
    methods: {
      toggler() {
        this.toggleSearch = !this.toggleSearch
      }
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/"><HomeIcon /></RouterLink>
      </li>
      <li>
        <SearchIcon @toggler="toggler" />
      </li>
      <li>
        <RouterLink to="/shopping">Menu</RouterLink>
      </li>
      <li>
        <RouterLink to="/account"> <UserIcon /> </RouterLink>
      </li>
      <li>
        <RouterLink to="/cart"> <ShoppingIcon /> </RouterLink>
      </li>
    </ul>
    <template v-if="toggleSearch">
      <div id="input-container"><input id="search-input" /></div>
    </template>
  </nav>
</template>

<style scoped>
  ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    position: fixed;

    bottom: 0;
    left: 50%;
    right: 50%;
  }

  ul li:first-child {
    padding-left: 0;
  }
  ul li {
    padding-left: 3em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }

  #input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
  #search-input {
  }
</style>
