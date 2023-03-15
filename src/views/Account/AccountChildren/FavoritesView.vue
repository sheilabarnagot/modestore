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
    max-height: 100%;
    /* box-shadow: 50px 0px 50px 5px grey; */
    /* object-fit: none; */
  }
  #favoriteh2 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 120px;
    font-family: 'Gloock', sans-serif;
  }
  .bonnie {
    color: #47413d;
    position: absolute;
    top: -3%;
    margin: 50px 40px;
    font-size: 2.5rem;
  }
  #favorite-products {
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
  #shirtname {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
  }
  .top-p {
    font-family: 'didot', sans-serif;
    margin: 10%;
  }
  .bottom-p {
    white-space: nowrap;
    font-family: 'didot', sans-serif;
    margin: 0;
  }
  p {
    margin: 0;
  }
  @media screen and (max-width: 440px) {
    #favorite-products {
      display: grid;
      margin: 1em;
      justify-items: center;
      grid-template-columns: 1fr;
      font-family: 'didot', sans-serif;
    }
  }
  @media screen and (min-width: 950px) {
    #favorite-products {
      display: grid;
      margin: 1em;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      font-family: 'didot', sans-serif;
    }
  }
  @media screen and (min-width: 600px) {
    #totalamount1 {
      display: none;
    }
  }
</style>
