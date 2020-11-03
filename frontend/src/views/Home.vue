<script>
// @ is an alias to /src
import MeetupCard from '@/components/meetup-card.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    MeetupCard
  },
  computed:{
    ...mapState(['counter','meetups'])
    // ...mapState({
    //   counter:(state)=>state.counter
    // })
  },
  methods:{
    ...mapActions(['fetchMeetups','incrementCounter'])
    // ...mapActions({
    //   incrementCounter:'incrementCounter'
    // })
  },
  created(){
    this.fetchMeetups()
  }
}
</script>

<template lang='pug'>
  main
    h1 The number of the items is {{meetups.length}}
    button(@click="incrementCounter") Increment
        div {{counter}}
    meetup-card(v-for="meetup in meetups",:meetup="meetup")
</template>


