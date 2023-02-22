import { createStore } from 'vuex'

const mutations = {
    basketItem(state, n) {
      state.items += n
    }
  },
  state = {
    items: []
  }

export default createStore({ mutations, state, strict: true })
