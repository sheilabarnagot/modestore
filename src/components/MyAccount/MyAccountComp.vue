<template>
  <!-- /v-for för att loopa igenom en lista av plagg och rendera en <div>-tagg för varje plagg.  Klassen 'favorit'
  läggs till på bild-elementet beroende på om plagg har markerats som favorit eller inte med hjälp av metoden isFavorit(). -->

  <div v-for="plagg in lista" :key="plagg.id">
    <h2>{{ plagg.namn }}</h2>
    <img
      :src="plagg.bild"
      :alt="plagg.namn"
      :class="{ favorit: isFavorit(plagg) }"
    />
    <!-- /Knappen anropar metoden toggleFavorit när den klickas på , och visar hjärtat markerat beroende på resultatet av metoden isFavorit(plagg).
      Om isFavorit(plagg) returnerar true visas en hjärtikon fylld med färg, annars visas en tom hjärta. -->
    <button @click="toggleFavorit(plagg)" type="button" class="btn btn-link">
      <i :class="isFavorit(plagg) ? 'bi-heart-fill' : 'bi-heart'" />
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      //* objekt som retunerar olika plagg med olika id.
      return {
        lista: [
          { id: 1, namn: 'T-shirt', bild: 'tshirt.jpg', favorit: false },
          { id: 2, namn: 'Jeans', bild: 'jeans.jpg', favorit: false },
          { id: 3, namn: 'Skirt', bild: 'skirt.jpg', favorit: false },
          { id: 4, namn: 'Hoodie', bild: 'hoodie.jpg', favorit: false }
        ]
      }
    },

    //* funktion isFavorit kollar om plagget finns bland de favoritmarkerade produkterna i Vuex store.
    //Funktionen returnerar true om plagg-id:t finns i favoriteItems-arrayen, annars false'/

    methods: {
      isFavorit(plagg) {
        return this.$store.state.favoriteItems.some(
          (favorit) => favorit.id === plagg.id
        )
      },
      //söker efter index i favoriteItems-arrayen för det plagg som har klickats på. Den använder findIndex()-metoden för att leta
      //igenom favoriteItems-arrayen och jämför id-attributet för varje plagg med id-attributet för det plagg som har klickats på.
      //Om det hittar en matchande plagg, returnerar den dess index. Annars returnerar den -1.

      toggleFavorit(plagg) {
        const index = this.$store.state.favoriteItems.findIndex(
          (favorit) => favorit.id === plagg.id
        )
        if (index > -1) {
          console.log('Removing item from favorites:', plagg)
          this.$store.commit('removeFavoriteItem', { id: plagg.id })
        } else {
          console.log('Adding item to favorites:', plagg)
          this.$store.commit('addFavoriteItem', plagg)
        }
      }
    }
  }
</script>
