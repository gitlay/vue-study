<template>
    <div>
        <top></top>
        <list></list>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/News/top'
    import  list from '../components/News/list'
    import  bottom from '../components/Public/bottom'
    export default {
        name: "News",
        components:{top,list,bottom}
    }
</script>

<style scoped>

</style>