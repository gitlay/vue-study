<template>
    <div class="index_nav fix">
        <ul>
            <li><router-link to="/room"><i><img src="../../../public/images/index_navtb1.png"/></i><span>住宅</span></router-link></li>
            <li><router-link to="/room"><i><img src="../../../public/images/index_navtb2.png"/></i><span>商业</span></router-link></li>
            <li><router-link to="/room"><i><img src="../../../public/images/index_navtb3.png"/></i><span>汽车</span></router-link></li>
            <li><router-link to="/room"><i><img src="../../../public/images/index_navtb4.png"/></i><span>其他</span></router-link></li>
            <li><router-link to="/news"><i><img src="../../../public/images/index_navtb5.png"/></i><span>拍卖指南</span></router-link></li>
            <li><router-link to="/promise"><i><img src="../../../public/images/index_navtb6.png"/></i><span>服务承诺</span></router-link></li>
            <li><router-link to="/news"><i><img src="../../../public/images/index_navtb7.png"/></i><span>成功案例</span></router-link></li>
            <li><router-link to="/about"><i><img src="../../../public/images/index_navtb8.png"/></i><span>关于我们</span></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menus"
    }
</script>

<style scoped>

</style>