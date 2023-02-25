<script>
  // import MyAccountComp from './MyAccountComp.vue'
  export default {
    components: {
      // MyAccountComp
    },
    data() {
      // ladda favoritplagg från localStorage om det finns, annars använd null
      const storedFavoritPlagg = localStorage.getItem('favoritPlagg')
      const favoritPlagg = storedFavoritPlagg
        ? JSON.parse(storedFavoritPlagg)
        : null

      return {
        //lista för att lagra klädobjekt.
        lista: [
          { id: 1, namn: 'T-shirt', bild: 'tshirt.jpg', favorit: false },
          { id: 2, namn: 'Jeans', bild: 'jeans.jpg', favorit: false },
          { id: 3, namn: 'Skirt', bild: 'skirt.jpg', favorit: false },
          { id: 4, namn: 'Hoodie', bild: 'hoodie.jpg', favorit: false }
        ], //favoritPlagg för att lagra favoritkläderna.
        favoritPlagg
      }
    },
    methods: {
      //isFavorit för att kontrollera om ett klädesplagg är favorit
      isFavorit(plagg) {
        return this.favoritPlagg && this.favoritPlagg.includes(plagg.id)
      }, //toggleFavorit för att lägga till eller ta bort klädobjekt från favoritplagg-listan.
      toggleFavorit(plagg) {
        if (!this.favoritPlagg) {
          this.favoritPlagg = []
        }
        const index = this.favoritPlagg.indexOf(plagg.id)
        if (index > -1) {
          this.favoritPlagg.splice(index, 1)
        } else {
          this.favoritPlagg.push(plagg.id)
        } // spara favoritPlagg i localStorage
        localStorage.setItem('favoritPlagg', JSON.stringify(this.favoritPlagg))
      }
    }
  }
</script>

<template>
  <!-- //template-delen skapar en div för varje klädobjekt i lista-egenskapen. -->

  <!-- //v-for används för att loopa igenom varje klädobjekt -->

  <div v-for="plagg in lista" :key="plagg.id">
    <h2>{{ plagg.namn }}</h2>
    <img :alt="plagg.namn" :class="{ favorit: isFavorit(plagg) }" />
    <button @click="toggleFavorit(plagg)" type="button" class="btn btn-link">
      <i :class="isFavorit(plagg) ? 'bi-heart-fill' : 'bi-heart'" />
    </button>
  </div>
</template>
