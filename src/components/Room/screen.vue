<template>
    <div class="product_nav fix">
        <a href="#" class="product_navlist product_navlist1 on">价格</a>
        <a href="#" class="product_navlist product_navlist2">户型</a>
        <a href="#" class="product_navlist product_navlist3">地点</a>
        <a class="product_navlist product_navlist4">更多</a>
        <div class="product_sx fix">
            <div class="product_sxcn fix">
                <h3>面积</h3>
                <ul>
                    <li><a href="#" rel="50平以下" name="date" class="sx_child">50m2以下</a></li>
                    <li><a href="#" rel="50m2-70m2" name="date" class="sx_child">50m2-70m2</a></li>
                    <li><a href="#" rel="70m2-90m2" name="date" class="sx_child">70m2-90m2</a></li>
                    <li><a href="#" rel="90m2-110m2" name="date" class="sx_child">90m2-110m2</a></li>
                    <li><a href="#" rel="110m2-130m2" name="date" class="sx_child">110m2-130m2</a></li>
                    <li><a href="#" rel="130m2-150m2" name="date" class="sx_child">130m2-150m2</a></li>
                    <li><a href="#" rel="150m2-200m2" name="date" class="sx_child">150m2-200m2</a></li>
                    <li><a href="#" rel="200m2以上">200m2以上</a></li>
                    <li><a href="#" rel="" name="date" class="all on">不限</a></li>
                </ul>
                <h3>类型</h3>
                <ul>
                    <li class="on"><a href="#" rel="司法拍卖" name="mode" class="sx_child">司法拍卖</a></li>
                    <li><a href="#" rel="国资拍卖" name="mode" class="sx_child">国资拍卖</a></li>
                    <li><a href="#" rel="其他拍卖" name="mode" class="sx_child">其他拍卖</a></li>
                    <li><a href="#" rel="" name="mode" class="all on">不限</a></li>
                </ul>
                <h3>性质</h3>
                <ul>
                    <li><a href="#" rel="住宅" name="stage" class="sx_child">住宅</a></li>
                    <li><a href="#" rel="商业" name="stage" class="sx_child">商业</a></li>
                    <li><a href="#" rel="写字楼" name="stage" class="sx_child">写字楼</a></li>
                    <li><a href="#" rel="汽车" name="stage" class="sx_child">汽车</a></li>
                    <li><a href="#" rel="土地厂房" name="stage" class="sx_child">土地厂房</a></li>
                    <li><a href="#" rel="股权" name="stage" class="sx_child">股权</a></li>
                    <li><a href="#" rel="其他" name="stage" class="其他">其他</a></li>
                    <li><a href="#" rel="" name="stage" class="all on">不限</a></li>
                </ul>
                <div class="product_sxan fix">
                    <input type="button" class="product_sxbutton1" value="清空条件">
                    <input type="button" class="product_sxbutton2" value="确 认">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "screen",
        mounted() {
            $(function () {
                new SelectTag({
                    child: ".sx_child", //所有筛选范围内的子类
                    over: 'on', //选中状态样式名称
                    all: ".all"
                });
                $(".product_navlist4").click(function () {
                    $(".product_sx").toggleClass("show");
                });
                $(".product_sxbutton2").click(function () {
                    $(".product_sx").removeClass("show");
                });
            })
        }
    }
</script>

<style scoped>

</style>