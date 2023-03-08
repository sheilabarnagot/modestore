import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const mutations = {
  // Lägg till en produkt i kundvagnen
  basketItem(state, { name, id, src, price, product }) {
    state.items.push({
      name: name,
      id: id,
      src: src,
      price: price,
      product: product,
      isClicked: false
    })
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
  },
  // Set the isClicked property for an item
  setClicked(state, payload) {
    const itemIndex = state.items.findIndex((item) => item.id === payload.id)
    if (itemIndex !== -1) {
      state.items[itemIndex].isClicked = true
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
  plugins: [createPersistedState()],
  strict: true
})
