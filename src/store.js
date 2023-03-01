import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// så att sparade item i vuex inte försvinner när man uppdaterar

const mutations = {
  // Lägg till en produkt i kundvagnen
  basketItem(state, { name, id, pic }) {
    state.items.push({ name: name, id: id, pic: pic })
  },
  // Ta bort en produkt från kundvagnen
  deleteItem(state, payload) {
    const itemIndex = state.items.findIndex((item) => item.id === payload.id)
    if (itemIndex !== -1) {
      state.items.splice(itemIndex, 1)
    }
  },
  // Lägg till en favoritprodukt
  addFavoriteItem(state, item) {
    state.favoriteItems.push(item)
  },
  // Ta bort en favoritprodukt
  removeFavoriteItem(state, payload) {
    const itemIndex = state.favoriteItems.findIndex(
      (item) => item.id === payload.id
    )
    if (itemIndex !== -1) {
      state.favoriteItems.splice(itemIndex, 1)
    }
  }
}

const state = {
  items: [],
  favoriteItems: []
}

export default createStore({
  state,
  mutations,
  plugins: [createPersistedState()], //  createPersistedState måste importerad här.
  strict: true
})
