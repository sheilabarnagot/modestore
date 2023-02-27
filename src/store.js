import { createStore } from 'vuex'

const mutations = {
    basketItem(state, { name, id }) {
      state.items.push({ i: name, id: id })
    },
    deleteItem(state, id) {
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.count--
        if (item.count === 0) {
          item.isClicked = true
        }
      }

      // const index = state.items.findIndex((item) => item.id === id)

      // state.items.splice(index, 1)
    }
  },
  state = {
    items: []
  }

export default createStore({ mutations, state, strict: true })
