<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['counter'])
    // ...mapState({
    //   counter:(state)=>state.counter
    // })
  },
  methods:{
    ...mapActions(['fetchMeetups'])
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
    h1 The number of the items is {{counter}}
    h2 hellooo
</template>


