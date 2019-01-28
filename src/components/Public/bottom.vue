<template>
    <div class="footer fix">
        <ul>
            <li class="on">
                <router-link to="/"><i class="footer_tb1"></i><span>首页</span></router-link>
            </li>
            <li >
                <router-link to="/room"><i class="footer_tb2"></i><span>买房</span></router-link>
            </li>
            <li >
                <router-link to="/contact"><i class="footer_tb3"></i><span>联系我们</span></router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>

</style>