import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: { },
    currentOrder: [],
    orderHistory: [],
    landingPage: true
  },
  mutations: {
    saveUser(state, user){
      state.currentUser = {...user}
    },
    saveCurrentOrder(state, order){
      console.log("Item is: " + order.title)

      //state.currentOrder.filter((order) => (order === order.title)).length;

      state.currentOrder.push(order)
    },
    saveOrder(state, order){
      state.orderHistory.push(order)
    }, 
    toggleLandingPage(state){
      state.landingPage = false
    }
  },
  actions: {
    stopLandingPage(context){
      context.commit('toggleLandingPage')
    },
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
