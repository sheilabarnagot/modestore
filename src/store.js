import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const mutations = {
  basketItem(state, { name, id, pic }) {
    state.items.push({ i: name, id: id, pic: pic })
  },
  deleteItem(state, payload) {
    const itemIndex = state.items.findIndex((hej) => hej.id === payload.id)
    if (itemIndex !== -1) {
      state.items.splice(itemIndex, 1)
    }
  }
}

const state = {
  items: []
}

export default createStore({
  state,
  mutations,
  plugins: [createPersistedState()]
})
