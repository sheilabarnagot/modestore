<template>
  <div>
    <h2 id="favoriteh2">Favorite Products</h2>
    <ul id="favorite-products">
      <li v-for="product in favoriter" :key="product.id">
        <!--  två paragrafer (p) med klasserna "top-p" och "bottom-p". Den första paragrafen visar produktens namn (product.name)
           och den andra paragrafen visar produktens typ (product.product). -->
        <div id="shirtname">
          <p class="top-p">{{ product.name }}</p>
          <p class="bottom-p">{{ product.product }}</p>
        </div>
        <!-- Denna kod skapar en bild, en prissättning och en hjärtikon för varje produkt i listan över favoritprodukter. Produktens bild och pris hämtas från dess attribut i objektet,
           medan hjärtikonen ändras beroende på om produkten är favorit eller inte. -->
        <img :src="`${product.src}`" alt="product image" />
        <p>{{ product.price }}</p>
        <!-- Denna kod skapar en hjärtikon som används för att lägga till eller ta bort en produkt från användarens favoriter. Hjärtikonen har två olika klasser beroende på om produkten redan finns bland användarens favoriter eller inte.
           När användaren klickar på hjärtat anropas en funktion som lägger till eller tar bort produkten från användarens favoriter. -->
        <i
          :class="isFavorite(product) ? 'bi bi-heart-fill' : 'bi bi-heart'"
          @click="toggleFavorite(product)"
          type="button"
          class="heart"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      favoriter() {
        return this.$store.state.favoriteItems
      }
    },
    // definierar en computed property som returnerar en array av favoritprodukter, och två metoder
    //  för att kolla om en produkt finns i favoriter och för att lägga till eller ta bort en produkt från favoriter i Vuex store.
    methods: {
      isFavorite(product) {
        return this.$store.state.favoriteItems.includes(product)
      },
      // Komponenten visar en lista över favoritprodukter.  En hjärtikon bredvid visar om produkten är en favorit eller inte.
      // Klick på hjärtikonen lägger till eller tar bort produkten från favoriter. Komponenten hämtar favoritprodukter från Vuex store.
      toggleFavorite(product) {
        if (this.isFavorite(product)) {
          this.$store.commit('removeFavoriteItem', product)
        } else {
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

  #favoriteh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 10px;
    font-family: 'Gloock', serif;
  }
  #favorite-products {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .selected {
    border: 2px solid red;
  }
</style>
