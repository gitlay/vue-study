<template>
    <div>
        <top></top>
        <detail></detail>
        <bottom></bottom>
    </div>
</template>

<script>
    import  top from '../components/Show/top'
    import  detail from '../components/Show/detail'
    import bottom from "../components/Public/bottom";

    export default {
        name: "Show",
        components:{top,detail,bottom}
    }
</script>

<style scoped>

</style>