<template>
    <div>
        <top></top>
        <screen></screen>
        <list></list>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/Room/top'
    import  screen from '../components/Room/screen'
    import  list from '../components/Room/list'
    import  bottom from '../components/Public/bottom'

    export default {
        name: "Room",
        components:{top,screen,list,bottom}
    }
</script>

<style scoped>

</style>