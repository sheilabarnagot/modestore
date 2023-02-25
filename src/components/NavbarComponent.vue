<template>
  <div id="langButton">
  <LangBtn id="langbtn" />
</div>
  <nav class="mobile-menu">
    <ul>
      <li>
        <RouterLink to="/"><HomeIcon /></RouterLink>
      </li>
      <li>
        <SearchIcon @click="toggler" />
      </li>
      <li>
        <RouterLink to="/menu">Menu</RouterLink>
      </li>
      <li>
        <RouterLink to="/account"> <UserIcon /> </RouterLink>
      </li>
      <li>
        <RouterLink to="/cart"> <ShoppingIcon /> </RouterLink>
      </li>
    </ul>
    <template v-if="toggl">
      <form id="input-container">
        <input />
      </form>
    </template>
  </nav>
</template>

<script>
  import HomeIcon from './SvgIcons/HomeIcon.vue'
  import SearchIcon from './SvgIcons/SearchIcon.vue'
  import UserIcon from './SvgIcons/UserIcon.vue'
  import ShoppingIcon from './SvgIcons/ShoppingIcon.vue'
  import LangBtn from './LangBtn.vue'

  export default {
    data() {
      return {
        dropdownShow: null,
        toggl: false,
        menuToggl: false
      }
    },
    components: {
      HomeIcon,
      SearchIcon,
      UserIcon,
      ShoppingIcon,
      LangBtn
    },
    methods: {
      toggler() {
        this.toggl = !this.toggl
      },
      menuToggler() {
        this.menuToggl = !this.menuToggl
      }
    }
  }
</script>

<style scoped>
  nav {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 2;
    height: 4em;
    width: 100%;
    background-color: #f6f6f7;
  }
  ul {
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
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
    bottom: 200%;
    position: absolute;
  }
  #bad-element {
    cursor: pointer;
  }
  #langButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>
