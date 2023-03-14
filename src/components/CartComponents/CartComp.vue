<template>
  <div id="container">
    <h2 id="productsh2">Products</h2>

    <ul id="products">
      <!-- Here we are looping through the filtered products, which will be different categories of clothes depending on what prop was sent in. -->
      <li v-for="product in filteredProducts" :key="product.id">
        <div id="productinfo">
          <p class="top-p">{{ product.name }}</p>
          <p class="bottom-p">{{ product.product }}</p>
        </div>

        <!-- Med src här under så blir bilderna dubbla -->
        <RouterLink
          :to="`/description/${product.src.split('/')}/${product.name}/${
            product.price
          }/${product.product}`"
          ><img
            :src="`${product.src}`"
            alt="product image"
            :class="{ selected: isFavorit(product) }"
          />
        </RouterLink>
        <!-- är produkten favorit eller inte -->

        <p>{{ product.price }}</p>
        <!-- här skapar en hjärtikon som antingen fylls med färg eller inte beroende på om produkten är favorit eller inte.
    När hjärtat klickas på så ändras statusen för produkten. -->
        <i
          :class="isFavorit(product) ? 'bi bi-heart-fill' : 'bi bi-heart'"
          @click="toggleFavorit(product)"
          type="button"
          class="heart"
        />
        <button
          id="addbutton"
          @click="
            () =>
              $emit(
                'fromcartcomp',
                product.name,
                product.id,
                product.src,
                product.price,
                product.product
              )
          "
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import productsData from '../../../assets/products.json'
  export default {
    // Here the prop is recieved and also used down in the filteredProducts method by writing this.category.
    props: {
      category: {
        type: String,
        required: true
      }
    },
    emits: ['fromcartcomp', 'imageclick'],
    components: {},
    data() {
      return {
        products: productsData
      }
    },
    computed: {
      // This computed method is filtering through the json files and looks for all the categorys that have the same value as the prop that was recieved from Shoppingview.vue. So for example the value could be jacket. We then use this method up in our template to loop through, displaying only the certain category.
      filteredProducts() {
        return this.products.productpics.filter(
          (product) => product.category === this.category
        )
      },
      //Computed property "favoriter" hämtar och returnerar en array med favoritprodukter från Vuex store.
      favoriter() {
        return this.$store.state.favoriteItems
      }
    }, //Metoden "isFavorit(product)" kollar om produkten finns i favoritlistan genom att använda
    //array-metoden "some" för att söka efter produkten med en matchande id.
    //Om produkten finns i favoritlistan så returnerar metoden true, annars false.
    methods: {
      isFavorit(product) {
        return this.$store.state.favoriteItems.some(
          (favorit) => favorit.id === product.id
        )
      },
      // Koden innehåller en metod "toggleFavorit(product)" som antingen lägger till eller tar bort en
      // produkt från favoritlistan beroende på dess status.
      //  används för att uppdatera favoritlistan när användaren klickar på hjärtikonen.
      toggleFavorit(product) {
        const index = this.$store.state.favoriteItems.findIndex(
          (favorit) => favorit.id === product.id
        )
        // Koden använder commit-metoden från Vuex store för att lägga till eller ta bort produkter från favoritlistan.
        // Om produkten redan finns i listan så tas den bort med hjälp av produktens id. Annars läggs produkten till i favoritlistan.
        if (index > -1) {
          console.log('Removing item from favorites:', product)
          this.$store.commit('removeFavoriteItem', { id: product.id })
        } else {
          console.log('Adding item to favorites:', product)
          this.$store.commit('addFavoriteItem', product)
        }
      }
    }
  }
</script>

<style scoped>
  #addbutton {
    background-color: #2ea44f;
    border: 4px solid rgba(27, 31, 35, 0.15);
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 23px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
  }
  #addbutton:hover {
    background-color: #3f684b;
  }
  .heart {
    font-size: 30px;
    color: rgb(50, 48, 48);
    cursor: pointer;
    line-height: 10px;
    padding: 9px 40px 9px 20%; /* increase right padding to 60px */
    text-align: center;
    padding-bottom: 10%;
  }
  img {
    max-width: 100%;
    /* box-shadow: 50px 0px 50px 5px grey; */
    /* object-fit: none; */
  }
  #productinfo {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  #productsh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: 'Gloock', serif;
  }
  #products {
    display: grid;
    gap: 1em;
    margin: 1em;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  .selected {
    border: 2px solid red;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
