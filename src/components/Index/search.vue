<template>
    <div class="index_search fix">
        <form class="index_form fix" method="get" action="/search">
            <input type="text" class="index_text" placeholder="请输入区域、商圈、小区名称或房源特征"/>
            <input type="submit" class="index_submit" value=""/>
        </form>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>

</style>