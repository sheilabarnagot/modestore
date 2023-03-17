<template>
  <div id="container">
    <RouterLink to="/kop"
      ><button id="checkout-button">To checkout</button>
    </RouterLink>
    <p id="totalamount1">Total amount: {{ $store.state.totalCost }} kr</p>
    <h2 id="productsh2">{{ category }}</h2>
    <ul id="products">
      <!-- Here we are looping through the filtered products, which will be different categories of clothes depending on what prop was sent in. -->
      <li v-for="product in filteredProducts" :key="product.id">
        <!-- // encodeURIComponent() -->

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
        <div id="main-info">
          <div id="productinfo">
            <p class="top-p">{{ product.product }} {{ product.name }}</p>
            <p class="bottom-p">Price: {{ product.price }}</p>
          </div>
          <!-- här skapar en hjärtikon som antingen fylls med färg eller inte beroende på om produkten är favorit eller inte.
    När hjärtat klickas på så ändras statusen för produkten. -->
          <i
            :class="isFavorit(product) ? 'bi bi-heart-fill' : 'bi bi-heart'"
            @click="toggleFavorit(product)"
            type="button"
            class="heart"
          />
        </div>
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
    },
    //Metoden "isFavorit(product)" kollar om produkten finns i favoritlistan genom att använda
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
  #checkout-button {
    position: absolute;
    margin-left: 75%;
    top: 100px;
    background-color: #3c3e3f;
    color: white;
    font-size: 0.8em;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
  }
  #totalamount1 {
    margin-left: 75%;
    position: absolute;
    top: 140px;
    max-width: 13ch;
    font-family: 'didot', sans-serif;
  }
  #addbutton {
    width: 100%;
    background-color: #3c3e3f;
    color: #fff;
    font-size: 0.8em;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    margin-top: 3px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: 'didot', sans-serif;
  }
  #addbutton:hover {
    background-color: #818c85;
  }
  .heart {
    font-size: 30px;
    color: rgb(50, 48, 48);
    cursor: pointer;
    line-height: 10px;
    padding: 9px 40px 9px 0px; /* increase right padding to 60px */
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
    margin-top: 120px;
    font-family: 'Gloock', sans-serif;
  }
  #products {
    display: grid;
    gap: 1em;
    margin: 1em;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    font-family: 'didot', sans-serif;
    margin-top: 100px;
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
  #productinfo {
    display: flex;
    white-space: nowrap;
  }

  #main-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 14px;
  }
  .top-p {
    font-family: 'didot', sans-serif;
  }
  .bottom-p {
    white-space: nowrap;
    font-family: 'didot', sans-serif;
  }
  p {
    margin: 0;
  }
  @media screen and (max-width: 440px) {
    #products {
      display: grid;
      margin: 1em;
      justify-items: center;
      grid-template-columns: 1fr;
      font-family: 'didot', sans-serif;
    }
  }
  @media screen and (min-width: 950px) {
    #products {
      display: grid;
      margin: 1em;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      font-family: 'didot', sans-serif;
    }
  }
</style>
