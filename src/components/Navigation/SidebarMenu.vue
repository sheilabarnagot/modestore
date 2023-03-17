<!--KZ menu/navigation for screens 601 and up -->
<template>
  <nav>
    <div class="menu-icon tablet-menu" @click="toggleMenu">
      <div class="icon" v-if="!isOpen"><StyledHamburger /></div>
      <div class="icon" v-else><CloseIcon @close-menu="toggleMenu" /></div>
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
            <!--The toLowerCase() method is used to convert the category name to lowercase, as the convention for URL paths.-->
            <RouterLink
              @click="toggleMenu"
              :style="{ width: isOpenWidth, transition: firstTransitsion }"
              :to="{
                path:
                  category.id === 1 ? '/' : `/${category.name.toLowerCase()}`
              }"
              >{{ $t(category.name) }}</RouterLink
            >
          </div>
          <ul>
            <li
              v-for="subcategory in category.subcategories"
              :key="subcategory.id"
            >
              <RouterLink
                :to="`/${category.name.toLowerCase()}/${subcategory.name.toLowerCase()}`"
                >{{ $t(subcategory.name) }}</RouterLink
              >
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div id="menu-item-icons-container">
      <FilterFetchDesktop
        @filterproducts="searchedItemsToVuex"
        class="need-z"
      />
      <!-- <SearchIcon class="need-z" @click="toggler" /> -->
      <RouterLink class="need-z" to="/account">
        <UserIcon class="menu-shopping-search need-z" />
      </RouterLink>
      <div class="lang">
        <LangBtn />
      </div>
      <RouterLink class="need-z" to="/cart">
        <ShoppingIcon class="menu-shopping-search need-z" />
      </RouterLink>
      <div
        style="display
      flex"
      >
        <p id="total-cart-items2">
          {{ $store.getters.totalQuantity }}
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
  import StyledHamburger from '../SvgIcons/StyledHamburger.vue'
  import CloseIcon from '../SvgIcons/CloseIcon.vue'
  import UserIcon from '../SvgIcons/UserIcon.vue'
  import ShoppingIcon from '../SvgIcons/ShoppingIcon.vue'

  import FilterFetchDesktop from '../Filter/FilterFetchDesktop.vue'

  import LangBtn from '../LangBtn.vue'
  export default {
    components: {
      StyledHamburger,
      CloseIcon,
      UserIcon,
      ShoppingIcon,
      FilterFetchDesktop,
      LangBtn
    },
    data() {
      return {
        isOpen: false,
        isOpenWidth: '0',
        firstTransitsion: '0.5s',
        categories: [
          { id: 7, name: 'Shopping' },
          { id: 2, name: 'Jackets' },
          { id: 3, name: 'Tops' },
          { id: 4, name: 'Bottoms' },
          { id: 5, name: 'Dresses' },
          { id: 6, name: 'About' }
        ],
        toggl: false
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen
        this.isOpenWidth === '0'
          ? (this.isOpenWidth = '300px') //sidebar widht when open
          : (this.isOpenWidth = '0')
      },
      toggler() {
        this.toggl = !this.toggl
      },
      searchedItemsToVuex(ez) {
        this.$store.commit('searchedItemsFiltered', ez)
        this.$router.push('/searchcomponent')
      }
    }
  }
</script>

<style scoped lang="scss">
  .need-z {
    z-index: 999;
  }

  nav {
    display: none;
  }
  .sidebar-menu {
    height: 100%; /* 100% Full-height */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    background-color: #eeece5;
    opacity: 0.7;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 120px; /* Place content 120px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }
  .menu-icon {
    position: absolute;
    top: 40px;
    right: 50px;
    font-size: 16px;
    margin-left: 10px;
    // z-index: 999;
    //new style
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-icon svg {
    margin-right: 30px;
  }
  .menu-icon .icon {
    z-index: 999;
    display: flex;
    align-items: center;
  }
  .menu-items {
    padding: 30px 0px 0px 100px;
    text-decoration: none;
    font-size: 16px;
    color: #47413d;
    display: block;
    transition: 0.3s;
  }
  .menu-items div {
    //padding: 0.5rem 0;
    // margin: 10px 0px;
    font-size: 1rem;
  }
  a {
    font-family: jost;
    color: #47413d;
  }
  //line under the links to show where you are
  .menu-items div::after {
    content: '';
    display: block;
    //position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(80%);
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
  .close-icon {
    position: absolute;
    top: 100px;
    right: 100px;
    cursor: pointer;
  }

  input {
    outline: 0;
    position: absolute;
    right: 100%;
    border-width: 0 0 2px;
    background: transparent;
    border-top: none;
    border-bottom: 2px solid black;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 1; /* Firefox */
  }

  .lang {
    position: absolute;
    // right: 70px;
    right: 35%;
    top: 15%;
  }
  // pontus add them here, kz fixing position for the icons on the right
  #menu-item-icons-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    // z-index: 1;
    // width: 100%;
    padding-right: 12em;
    top: 6.5%;
    right: 3%;
  }
  .menu-shopping-search {
    margin-left: 2em;
  }
  #menu-item-icons-container p {
    position: relative;
    right: 1%;
    top: 25%;
  }
  @media (min-width: 601px) {
    nav {
      display: block;
    }
  }
  @media screen and (min-width: 600px) {
    #total-cart-items2 {
      bottom: -11px;
      right: 160px;
      position: absolute;
      font-size: smaller;
      font-weight: bolder;
    }
  }
</style>
