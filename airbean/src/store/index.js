import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    saveUser(state, user){
      state.currentUser = {...user}
    }
  },
  actions: {
    save(context, user){
      context.commit('saveUser', user)
    }
  },
  modules: {
  }
})
