<template>
  <div id="login">
    <p id="hello">Hello, you are now logged in.</p>
  </div>
  <!-- <div class="plagg-container">
    <div v-for="plagg in lista" :key="plagg.id" class="plagg-item">
      <h2>{{ plagg.namn }}</h2>
      <img
        :src="plagg.bild"
        :alt="plagg.namn"
        :class="{ favorit: isFavorit(plagg) }"
      />
      <button @click="toggleFavorit(plagg)" type="button" class="btn btn-link">
        <i :class="isFavorit(plagg) ? 'bi-heart-fill' : 'bi-heart'" />
      </button>
    </div>
  </div> -->
  <!-- <div class="favorites-container">
    <h3>Favoriter</h3>
    <ul>
      <li v-for="favorit in favoriter" :key="favorit.id">
        {{ favorit.namn }}
      </li>
    </ul>
  </div> -->
</template>

<style scoped>
  .plagg-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 10%;
    margin-bottom: 10%;
  }

  .plagg-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .favorit {
    border: 2px solid red;
  }

  .favorites-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .favorites-container h3 {
    margin-bottom: 10px;
  }

  .favorites-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .favorites-container li {
    margin-bottom: 5px;
  }
  #login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3em 2.5em;
    color: #3c3e3f;
    font-size: 1.2em;
  }
  @media (min-width: 980px) {
    #login {
      justify-content: center;
      font-size: 30px;
    }
  }
</style>

<script>
  export default {
    data() {
      //* objekt som retunerar olika plagg med olika id.
      return {
        lista: [
          {
            id: 1,
            namn: '',
            bild: '/img1200/billy-aw-campagne/billy-aw-campagne-30.jpg',
            favorit: false
          },

          {
            id: 2,
            namn: '',
            bild: '/img1200/billy-aw-campagne/billy-aw-campagne-32.jpg',
            favorit: false
          },
          {
            id: 3,
            namn: '',
            bild: '/img1200/billy-aw-campagne/billy-aw-campagne-33.jpg',
            favorit: false
          },
          {
            id: 4,
            namn: '',
            bild: '/img1200/billy-aw-campagne/billy-aw-campagne-id-34.jpg',
            favorit: false
          }
        ]
      }
    },

    //* funktion isFavorit kollar om plagget finns bland de favoritmarkerade produkterna i Vuex store.
    //Funktionen returnerar true om plagg-id:t finns i favoriteItems-arrayen, annars false'/

    computed: {
      favoriter() {
        return this.$store.state.favoriteItems
      }
    },

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
<style scoped>
  .plagg-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
  }

  .plagg-item {
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .favorit {
    border: 2px solid red;
  }

  .favorites-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .favorites-container h3 {
    margin-bottom: 10px;
  }

  .favorites-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .favorites-container li {
    margin-bottom: 5px;
  }

  .bi-heart,
  .bi-heart-fill {
    font-size: 1.8rem;
  }
</style>
