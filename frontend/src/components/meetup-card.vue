<script>
export default {
    name:'MeetupCard',
    props:['meetup'] /// same in home.vue :meetup
}
</script>
<template lang="pug">
    div {{meetup.name}} 
        div.name {{meetup.location}}
</template>

<style scoped>
    .name{
        color:blue
    }
</style>