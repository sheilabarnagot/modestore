<template>
  <nav>
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
      <div id="input-container">
        <input id="search-input" />
      </div>
    </template>
    <div id="langButton">
    <LangBtn />
    {{ gettzzz }}
  </div>
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
        menuToggl: false,
        width: window.innerWidth
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
    },
    computed: {
      gettzzz() {
        return this.width
      }
    }
  }
</script>

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
  #bad-element {
    cursor: pointer;
  }
  #langButton{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>
