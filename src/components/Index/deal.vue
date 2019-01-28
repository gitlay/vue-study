<template>
    <div class="index_Deal fix">
        <div class="index_bt fix"><i><img src="../../../public/images/index_tb1.png"/></i>
            <h3>今日成交</h3>
            <a href="product.html">查看更多</a>
            <router-link to="/room"></router-link>
        </div>
        <div class="index_Dealcn fix">

            <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
                <swiper-slide>

                    <router-link to="/detail">
                        <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i></div>
                        <div class="index_Dealsm fix"><em>价差</em>
                            <h3>1900.00</h3><span>万元</span></div>
                        <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                            <p> 市场价 0.000万元</p></div>
                        <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                        <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <swiper-slide>

                        <router-link to="/detail">
                            <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i>
                            </div>
                            <div class="index_Dealsm fix"><em>价差</em>
                                <h3>1900.00</h3><span>万元</span></div>
                            <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                                <p> 市场价 0.000万元</p></div>
                            <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                            <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>

                        <router-link to="/detail">
                            <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i>
                            </div>
                            <div class="index_Dealsm fix"><em>价差</em>
                                <h3>1900.00</h3><span>万元</span></div>
                            <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                                <p> 市场价 0.000万元</p></div>
                            <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                            <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>

                        <router-link to="/detail">
                            <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i>
                            </div>
                            <div class="index_Dealsm fix"><em>价差</em>
                                <h3>1900.00</h3><span>万元</span></div>
                            <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                                <p> 市场价 0.000万元</p></div>
                            <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                            <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>

                        <router-link to="/detail">
                            <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i>
                            </div>
                            <div class="index_Dealsm fix"><em>价差</em>
                                <h3>1900.00</h3><span>万元</span></div>
                            <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                                <p> 市场价 0.000万元</p></div>
                            <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                            <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                        </router-link>
                    </swiper-slide>
                    <router-link to="/detail">
                        <div class="index_Dealtp fix"><i><img src="../../../public/images/index_Deal.jpg"/></i></div>
                        <div class="index_Dealsm fix"><em>价差</em>
                            <h3>1900.00</h3><span>万元</span></div>
                        <div class="index_Dealje fix"><span> 成交价 0.00万</span>
                            <p> 市场价 0.000万元</p></div>
                        <div class="index_Dealtm fix"><span>拍卖时间 2019-01-08 10:00:0</span></div>
                        <div class="index_Dealdz fix"><em></em><span>峻峰华亭A座802号</span></div>
                    </router-link>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>

<script>
    // require styles
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "deal",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 10000, false)
        }
    }
</script>

<style scoped>

</style>