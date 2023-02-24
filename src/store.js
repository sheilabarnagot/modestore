import { createStore } from 'vuex'

const mutations = {
    basketItem(state, { name, id }) {
      state.items.push({ i: name, id: id })
      console.log(state.items)
    },
    deleteItem(state, id) {
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.count--
        if (item.count === 0) {
          item.isClicked = true
        }
      }
    }
  },
  state = {
    items: []
  }

export default createStore({ mutations, state, strict: true })
