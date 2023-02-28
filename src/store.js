import { createStore } from 'vuex'

const mutations = {
  basketItem(state, { name, id }) {
    state.items.push({ i: name, id: id })
  },
  deleteItem(state, payload) {
    const itemIndex = state.items.findIndex(hej => hej.id === payload.id)
    if (itemIndex !== -1) {
      state.items.splice(itemIndex, 1)
    }
  }
}

const state = {
  items: []
}

export default createStore({ state, mutations, strict: true })
