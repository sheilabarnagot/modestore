<template>
  <nav class="mobile-menu">
    <ul>
      <li>
        <RouterLink to="/"><HomeIcon /></RouterLink>
      </li>
      <li @click="toggler">
        <SearchIcon />
      </li>
      <li class="dropup-center dropup">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul class="dropdown-menu">
          <!-- The different choises in the dropup menu -->
          <li id="menuitem">
            <RouterLink to="/bottoms"> Bottoms </RouterLink>
          </li>
          <li id="menuitem">
            <RouterLink to="/tops"> Tops </RouterLink>
          </li>
          <li id="menuitem">
            <RouterLink to="/jackets"> Jackets </RouterLink>
          </li>
          <li id="menuitem">
            <RouterLink to="/dresses"> Dresses </RouterLink>
          </li>
          <li id="menuitem">
            <RouterLink to="/shopping"> All products </RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <RouterLink to="/account"> <UserIcon /> </RouterLink>
      </li>
      <li>
        <RouterLink to="/cart"> <ShoppingIcon /> </RouterLink>
      </li>
    </ul>
    <template v-if="toggl">
      <FilterFetch @filterproducts="testar" />
    </template>
  </nav>
</template>

<script>
  import HomeIcon from '../SvgIcons/HomeIcon.vue'
  import SearchIcon from '../SvgIcons/SearchIcon.vue'
  import UserIcon from '../SvgIcons/UserIcon.vue'
  import ShoppingIcon from '../SvgIcons/ShoppingIcon.vue'
  import FilterFetch from '../Filter/FilterFetch.vue'

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
      FilterFetch
    },
    methods: {
      toggler() {
        this.toggl = !this.toggl
      },
      menuToggler() {
        this.menuToggl = !this.menuToggl
      },
      testar(ez) {
        this.$router.push('/SearchComponent')
        console.log(ez)
      }
    }
  }
</script>

<style scoped>
  nav {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 2;
    height: 4em;
    width: 100%;
    background-color: #f6f6f7;
  }

  ul:not(.dropdown-menu) {
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    bottom: 15px;
    left: 50%;
    right: 50%;
  }

  ul li:first-child {
    padding-left: 0;
  }
  ul li {
    padding-left: 2em;
  }

  ul li a {
    font-family: 'jost';
    text-decoration: none;
  }
  /*
  #input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 200%;
    position: absolute;
  } */
  #bad-element {
    cursor: pointer;
  }

  /* #langbtn {
    position: absolute;
    width: 100%;
    z-index: 1;
    left: 5%;
  } */
  .dropdown-menu {
    flex-direction: column;
  }
  #menuitem {
    text-align: center;
  }
  span {
    color: black;
  }
</style>
