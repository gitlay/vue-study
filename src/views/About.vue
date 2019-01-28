<template>
    <div>
        <top></top>
        <contents></contents>
        <bottom></bottom>
    </div>

</template>

<script>
    import  top from '../components/About/top'
    import  contents from '../components/About/contents'
    import bottom from "../components/Public/bottom";
    export default {
        name: "About",
        components:{top,contents,bottom}
    }
</script>

<style scoped>

</style>