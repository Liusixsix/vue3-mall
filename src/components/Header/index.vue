<template>
    <div class="" :class="[showHeaderBg ? 'header bg_gray' : 'header']">
        <!-- header -->
        <header class="header-container">
            <div class="w1200">
                <div class="header-left">
                    <city-select></city-select>
                    <span> <i class="iconfont icon-chanpin"></i> 产品</span>
                </div>
                <div class="header-content">极家汇极家精装logo</div>
                <div class="header-right">
                    <span> <i class="iconfont icon-saoyisao"></i> 下载APP</span>
                    <span> <i class="iconfont icon-dianhua"></i> 400-400-9504</span>
                </div>
            </div>
        </header>


        <!-- nav -->
        <nav class="nav-container">
            <div class="nav-content w1200">
                <div class="nav-left">
                    <div class="nav-left-item-wrap" v-for="item in navList" :key="item.title">
                        <router-link :to="item.path" :class="['nav-left-item',
                            item.className && item.className,
                            item.path === router.path && 'is-active',
                        ]">

                            {{ item.title }}
                            <em></em>
                        </router-link>
                        <i v-if="item.icon" :class="[item.icon, 'iconfont']"></i>
                    </div>

                </div>
                <div class="nav-right">
                    <Search :class="showHeaderBg ? 'bg-search' : ''"></Search>
                    <login-btn :class="showHeaderBg ? 'bg-btn' : ''"></login-btn>
                </div>
            </div>
        </nav>


    </div>
</template>


<script lang="ts" setup>
import type { INav } from './type'
import CitySelect from '@/components/city-select/index.vue'
import Search from '@/components/Search/index.vue'
import LoginBtn from '@/components/login-btn/index.vue'


const props = defineProps({
    ScorllTop: {
        type: Number,
        default: 0
    },
    innerHeight: {
        type: Number,
        default: 1000
    }
})

const showHeaderBg = computed(() => {
    return (props.ScorllTop) >= props.innerHeight
})


const navList = reactive<Array<INav>>([
    { title: "首页", path: "/home" },
    { title: "产品中心", path: "/product", icon: 'icon-jiantou' },
    { title: "线下体验馆", path: "" },
    { title: "设计团队", path: "" },
    { title: "关于我们", path: "", icon: 'icon-jiantou' },
])


const router = useRoute()

</script>


<style lang="scss" scoped>
.header {
    width: 100%;
    height: 120px;

    &.bg_gray {
        .header-container {
            background: $bg-white;
            color: $color-black;
            border-bottom: 1px solid rgba(212, 212, 212, 0.42);
        }

        .nav-container {
            background: $bg-white;
            color: $color-black;
            box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

            .nav-left-item {
                color: $color-black  !important;

                em {
                    background: $bg-black  !important;
                }
            }
        }
    }

    // header
    .header-container {
        position: fixed;
        top: 0px;
        width: 100%;
        height: 60px;
        z-index: 99;
        border-bottom: 1px solid rgba(242, 242, 242, 0.22);
        color: $color-white;

        .w1200 {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: space-between;

            font-size: $size-default;

            .header-left,
            .header-right {
                display: flex;
                align-items: center;
                height: 100%;

                span {
                    display: inline-block;
                    height: 100%;
                    line-height: 60px;
                    margin-right: 36px;
                    cursor: pointer;

                    .iconfont {
                        font-size: 14px;
                        margin-right: 4px;
                    }
                }

            }

            .header-content {
                font-size: $size-large;
                letter-spacing: 1px;
            }
        }
    }


    // nav
    .nav-container {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 60px;
        z-index: 9;
        width: 100%;
        color: $color-white;

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
        }

        .nav-left {
            display: flex;
            align-items: center;

            .nav-left-item-wrap {
                height: 60px;
                margin-right: 48px;

                .iconfont {
                    font-size: $size-small;
                    display: inline-block;
                    transform: rotate(90deg);
                    transition: all .3s ease;
                    margin-left: 6px;
                }

                .nav-left-item {
                    position: relative;
                    display: inline-block;
                    line-height: 60px;
                    height: 100%;
                    color: $color-white;
                    outline: none;
                    font-size: $size-large;

                    cursor: pointer;

                    &:hover {
                        em {
                            width: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                        }

                        &+.iconfont {
                            transform: rotate(-90deg);

                        }
                    }

                    &.is-active {
                        em {
                            width: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                }

                em {
                    position: absolute;
                    left: 50%;
                    bottom: 12px;
                    width: 0%;
                    height: 2px;
                    transition: 0.5s all;
                    background: $bg-white;
                }
            }


        }

        .nav-right {
            display: flex;
            align-items: center;
            margin-right: 12px;




        }
    }


}
</style>