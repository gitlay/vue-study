<template>
    <div>
        <top></top>
        <list></list>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/Search/top'
    import  list from '../components/Search/list'
    import  bottom from '../components/Public/bottom'
    export default {
        name: "Search",
        components:{top,list,bottom}
    }
</script>

<style scoped>

</style>