import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0
  },
  mutations: {
    setCounter(state,newCount){
      state.counter=newCount
    }
  },
  actions: {
    incrementCounter({commit,state}){
      const newCount=state.counter+1
      commit('setCounter',newCount)
    }
  },
  modules: {
  }
})
