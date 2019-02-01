<template>
    <div class="product_cn fix">
        <ul>
            <li>
                <router-link to="/detail" class="tbox">
                    <div><i><img src="../../../public/images/index_Recommendtp.jpg"/><b>预拍展示</b></i></div>
                    <div class="product_nn">
                        <p><em><img src="../../../public/images/index_Recommendtb1.png"/></em>起拍价：<span>349.00</span>万元
                        </p>
                        <p><em><img src="../../../public/images/index_Recommendtb2.png"/></em>市场价：<u>520.000</u>万元</p>
                        <p><em><img src="../../../public/images/index_Recommendtb3.png"/></em>南平里42号楼1单元1502号</p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: "list",
        mounted() {
            this.$api.post('index/banner', {
                //  "参数名": "参数值"
            }, response => {
                if (response.status >= 200 && response.status < 300) {
                    //  console.log(response.data);
                    this.list = response.data
                } else {
                    console.log(response.message);
                }
            });
        }
    }
</script>

<style scoped>

</style>