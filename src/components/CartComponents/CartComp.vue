<template>
  <div>
    <h2 id="productsh2">Products</h2>

    <ul id="products">
      <li v-for="product in products.productpics" :key="product.id">
        <div id="shirtname">
          <p class="top-p">{{ product.name }}</p>

          <p class="bottom-p">{{ product.product }}</p>
        </div>

        <img
          :src="`/${product.src}`"
          alt="product image"
          :class="{ selected: isFavorit(product) }"
        />
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
  import productsData from '/assets/products.json'
  export default {
    emits: ['fromcartcomp'],
    components: {},
    data() {
      return {
        products: productsData
      }
    }, //Computed property "favoriter" hämtar och returnerar en array med favoritprodukter från Vuex store.
    computed: {
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
  .container {
    display: flex;
    justify-content: space-between;
  }
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
    max-width: 50%;
    box-shadow: 50px 0px 50px 5px grey;
  }
  #shirtname {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }

  ul {
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
    grid-template-columns: 1fr 1fr;
  }

  .selected {
    border: 2px solid red;
  }
</style>
