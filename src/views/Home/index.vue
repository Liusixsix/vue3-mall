<template>
    <div class="container" > 
        <i-header :ScorllTop="y" :innerHeight="height"></i-header>
        <banner-swiper :style="swiperStyle"></banner-swiper>
        <footer-form></footer-form>
    </div>
    <div class="content">
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
         <h1>2323</h1>
        <h1>2323</h1>
         <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
         <h1>2323</h1>
        <h1>2323</h1>
         <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
         <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
        <h1>2323</h1>
    </div>
</template>

<script lang="ts" setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import BannerSwiper from '@/components/banner-swiper/index.vue';
import FooterForm from '@/components/footer-form/index.vue';
import IHeader from '@/components/Header/index.vue';


const { y } = useWindowScroll()
const { height } = useWindowSize()

const swiperStyle = computed(() => {
    return {
        filter: `brightness(${1 - Math.min((y.value / height.value), 1)})`,
    }
})



</script>

<style lang="scss" scoped>
.banner-swiper-wrap {
    height: 100vh;
    width: 100vh;
}

     .content {
    background: #fff;
    z-index: 1;
    position: relative;
    font-size: 50px;
    
}
</style>