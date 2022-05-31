<template>
    <div class="nav-container">
        <div class="w1200">
            <div class="nav-left">
                <div class="nav-left-item-wrap" v-for="item in navList" :key="item.title">
                    <router-link :to="item.path" :class="['nav-left-item',
                        item.className && item.className,
                        item.path === router.path && 'is-active',
                    ]">
                        {{
                                item.title
                        }}

                        <em></em>
                    </router-link>
                    <i v-if="item.icon" :class="[item.icon, 'iconfont']"></i>
                </div>

            </div>

            <div class="nav-right">
                <div class="search-container">
                    <input placeholder="请输入内容" type="text" class="search-input">
                </div>
                <button class="login-btn">登录/注册</button>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
interface INav {
    title: string
    path: string
    className?: string
    icon?: string
}


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
.nav-container {
    height: 60px;
    color: $color-white;
    // background: transparent;
    position: fixed;
    top: 60px;
    width: 100%;
    z-index: 22;

    &.bg_gray {
        background: #FFFFFF;
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);

        * {

            color: #999999;
        }
    }

    .w1200 {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav-left {
            display: flex;
            align-items: center;

            // background: pink;
            .nav-left-item-wrap {
                height: 60px;
                margin-right: 48px;

                .iconfont {
                    font-size: $size-small;
                    display: inline-block;
                    transform: rotate(90deg);
                    margin-left: 4px;
                }

                .nav-left-item {
                    position: relative;
                    display: inline-block;
                    line-height: 60px;
                    height: 100%;
                    color: #F2F2F2;
                    outline: none;
                    font-size: $size-large;

                    cursor: pointer;

                    &:hover {
                        em {
                            width: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        & + .iconfont{ 
                            transform: rotate(-90deg);
                            transition:  all .1s ease-in-out;
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
                    background: #fff;
                }


            }


        }

        .nav-right {
            display: flex;
            align-items: center;
            margin-right: 12px;

            .search-container {
                position: relative;
                width: 226px;
                height: 28px;
                border-radius: 14px;
                border: 1px solid #FFFFFF;

                .search-input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 12px;
                    color: #F2F2F2;
                    padding-left: 20px;
                    font-size: 12px;

                    &::-webkit-input-placeholder {
                        /* Chrome/Opera/Safari */
                        color: #F2F2F2;
                    }

                    &::-moz-placeholder {
                        /* Firefox 19+ */
                        color: #F2F2F2;
                    }

                    &::-ms-input-placeholder {
                        /* IE 10+ */
                        color: #F2F2F2;
                    }

                    &::-moz-placeholder {
                        /* Firefox 18- */
                        color: #F2F2F2;
                    }
                }


            }

            .login-btn {
                display: inline-block;
                width: 108px;
                height: 28px;
                font-size: $size-small;
                background: #FFFFFF;
                border-radius: 14px;
                outline: none;
                border: none;
                color: #333333;
                margin-left: 12px;
            }
        }
    }
}
</style>