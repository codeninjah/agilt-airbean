import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: { },
    currentOrder: [],
    orderHistory: []
  },
  mutations: {
    saveUser(state, user){
      state.currentUser = {...user}
    },
    saveCurrentOrder(state, order){
      state.currentOrder.push(order)
    },
    saveOrder(state, order){
      state.orderHistory.push(order)
    }
  },
  actions: {
    save(context, user){
      context.commit('saveUser', user)
    },
    current(context, order){
      context.commit('saveCurrentOrder', order)
    },
    order(context, order){
      context.commit('saveOrder', order)
    }
  },
  modules: {
  }
})
