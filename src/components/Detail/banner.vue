<template>
    <swiper :options="swiperOption" ref="mySwiper" class="banner fix" >
        <!-- slides -->
        <swiper-slide><img src="../../../public/images/product_banner.jpg"/></swiper-slide>
        <swiper-slide><img src="../../../public/images/product_banner.jpg"/></swiper-slide>
        <swiper-slide><img src="../../../public/images/product_banner.jpg"/></swiper-slide>
        <swiper-slide><img src="../../../public/images/product_banner.jpg"/></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
</template>
    <script>
        // require styles
        import 'swiper/dist/css/swiper.css'

        import { swiper, swiperSlide } from 'vue-awesome-swiper'

        export default {
            name: 'banner',
            components: {
                swiper,
                swiperSlide
            },
            data() {
                return {
                    swiperOption: {
                        loop : true,
                        autoplay:true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
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
 .swiper-wrapper img{
     width:100%;
 }
</style>