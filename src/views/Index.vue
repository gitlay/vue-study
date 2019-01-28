<template>
    <div>
        <top></top>
        <banner></banner>
        <search></search>
        <menus></menus>
        <deal></deal>
        <recommend></recommend>
        <process></process>
        <bottom></bottom>
    </div>

</template>

<script>
    import  top from '../components/Public/top'
    import  banner from '../components/Index/banner'
    import  search from '../components/Index/search'
    import  menus from '../components/Index/menus'
    import  deal from '../components/Index/deal'
    import  recommend from '../components/Index/recommend'
    import process from "../components/Index/process";
    import bottom from "../components/Public/bottom";
    export default {
        name: "Index",
        components:{process, banner,top,search,menus,deal,recommend,bottom}
    }
</script>

<style scoped>

</style>