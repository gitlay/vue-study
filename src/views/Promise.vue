<template>
    <div>
        <top></top>
        <detail></detail>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/Promise/top'
    import  detail from '../components/Promise/detail'
    import bottom from "../components/Public/bottom";
    export default {
        name: "Promise",
        components:{top,detail,bottom}
    }
</script>

<style scoped>

</style>