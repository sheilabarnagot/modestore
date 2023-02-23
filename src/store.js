import { createStore } from 'vuex'

const mutations = {
    basketItem(state, { name, id }) {
      state.items.push({ i: name, id: id })
      console.log(state.items)
    },
    deleteItem(state, id) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id) {
          delete state.items[i].i
        }
      }
    }
  },
  state = {
    items: []
  }

export default createStore({ mutations, state, strict: true })
