import { createStore } from 'vuex'

export default createStore({

  state: {
    email: null,
    token: null,
    places: [
      {
        id: 1,
        title: 'Home',
        positions: {
          lat: -28.4837049, lng: -49.0120509
        }
      }
    ]
  },

  mutations: {
    setEmail (state, payload) {
      state.email = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    // should separate in different modules (auth state and places)
    addPlace (state, payload) {
      state.places.push(payload)
    },
    removePlace (state, payload) {
      const i = state.places.map(item => item.id).indexOf(payload);
      state.places.splice(i, 1);
    },
  },

  getters: {
    getToken (state) {
      return state.token
    },
    getPlaces (state) {
      return state.places
    }
  },

  actions: {
    login ({ commit }, { email, token }) {
      commit('setEmail', email);
      commit('setToken', token);
    },
    logout ({ commit }) {
      commit('setEmail', null);
      commit('setToken', null);
    }
  },

  modules: {
  }
})
