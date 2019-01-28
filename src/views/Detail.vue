<template>
    <div>
        <top></top>
        <banner></banner>
        <parm></parm>
        <baidu></baidu>
        <recommend></recommend>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/Detail/top'
    import  banner from '../components/Detail/banner'
    import  parm from '../components/Detail/parm'
    import  baidu from '../components/Detail/map'
    import  recommend from '../components/Detail/recommend'
    import Bottom from "../components/Public/bottom";
    export default {
        name: "detail",
        components:{Bottom, top,banner,parm,baidu,recommend}
    }
</script>

<style scoped>

</style>