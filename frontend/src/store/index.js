import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    },
    async fetchMeetups(){
      const result=await axios.get('http://localhost:3001/meetup/all/json')
      console.log(result)
    }
  },
  modules: {
  }
})
