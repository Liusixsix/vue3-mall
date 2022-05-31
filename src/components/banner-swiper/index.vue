<template>
    <div class="banner-swiper-wrap">
        <swiper class="swiper" :style="props.style" :modules="modules" :pagination="pagination" :autoplay="autoplay"
            :loop="loop">
            <swiper-slide class="swiper-slider">
                <img src="http://www.dearfoam.cn/static/upload/image/20201216/1608080951858463.jpg" alt="" />
            </swiper-slide>
            <swiper-slide> <img src="http://www.dearfoam.cn/static/upload/image/20201216/1608081005939134.jpg" alt="" />
            </swiper-slide>
            <swiper-slide> <img src="http://www.dearfoam.cn/static/upload/image/20201216/1608082408430411.jpg" alt="" />
            </swiper-slide>
        </swiper>
    </div>
</template>


<script lang="ts" setup>
import { Pagination,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";


import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
    style: {
        type: Object,
        default: () => ({})
    }
})


const options = reactive({
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
        clickable: true
    },
})

const { autoplay, loop, pagination } = toRefs(options)
const modules = reactive([Pagination,Autoplay])

</script>

<style lang="scss" scoped>
.swiper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    .swiper-slider {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


    ::v-deep(.swiper-pagination-bullet) {
        width: 68px;
        height: 4px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 3px;
        opacity: 0.5;
        margin: 0 5px;

        &.swiper-pagination-bullet-active {
            opacity: 1;
            background: #FFFFFF;
        }
    }

    ::v-deep(.swiper-pagination) {
        width: auto;
        left: 18%;
        bottom: 186px;
    }

}
</style>