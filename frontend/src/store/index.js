import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0,
    meetups:[]
  },
  mutations: {
    setCounter(state,newCount){
      state.counter=newCount
    },
    setMeetups(state,data){
      state.meetups=data
    },
  },
  actions: {
    incrementCounter({commit,state}){
      const newCount=state.counter+1
      commit('setCounter',newCount)
    },
    async fetchMeetups({commit}){
      const result=await axios.get('http://localhost:3001/meetup/all/json')
      commit('setMeetups',result.data)
    }
  },
  modules: {
  }
})
