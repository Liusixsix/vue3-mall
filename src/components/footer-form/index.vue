<template>
    <div class="footer-form">
        <div class="w1200">
            <div class="more ">
                <div class="tag">
                    <span class="text">更多</span>
                    <span class="en">More</span>
                </div>
                <div class="more-right">
                    <div class="arrow">
                        <i class="iconfont icon-xiala1"></i>
                        <i class="iconfont icon-xiala1"></i>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="footer-form-left">
                <h1 class="prefix title">免费预约装修顾问</h1>
                <div class="tips">全程跟踪装修服务</div>
            </div>
            <div class="footer-form-input-group">
                <input type="text" class="input" placeholder="请输入您的姓名" />
                <input type="text" class="input" placeholder="请输入您的手机号" />
                <div class="code-wrap">
                    <input type="text" class="input code" placeholder="验证码" />
                    <div class="get-code-btn">获取验证码</div>
                </div>
                <button class="submit-btn">立即预约</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.footer-form {
    width: 100%;
    height: 120px;
    position: fixed;
    bottom: 0;
    z-index: 0;
    background: rgba(255, 255, 255, 0.68);
    border-radius: 24px 24px 0px 0px;
    padding-top: 34px;
    box-sizing: border-box;

    .w1200 {
        display: flex;
        align-items: center;
        position: relative;

        .more {
            position: absolute;
            top: -100px;
            right: -8px;
            display: flex;
            color: $color-white;
            font-size: 18px;

            // border: 1px solid red;
            .tag {
                display: flex;
                flex-direction: column;
                margin-right: 8px;

                .en {
                    font-size: 10px;
                    margin-top: 5px;
                }
            }

            &-right {
                // border: 1px solid $color-white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .arrow {
                    display: flex;
                    flex-direction: column;

                    margin-top: -1px;
                }

                .iconfont {
                    &:last-child {
                        margin-top: -10px;
                        animation:  fadeIn 1.5s ease infinite;
                    }
                    &:first-child{ 
                          animation:  fadeIn 1.5s ease infinite 1s;
                    }
                }

                .line {
                    width: 1px;
                    height: 46px;
                    z-index: -1;
                    background: #FFFFFF;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    background-color: #fff;
                }
            }
        }
    }

    &-left {
        margin-right: 76px;

        .title {
            font-size: 24px;
            font-weight: 500;
            color: #000000;
            letter-spacing: 3px;
        }

        .tips {
            font-size: 16px;
            font-weight: 400;
            color: #999999;
            margin-left: 12px;
            margin-top: 8px;
            letter-spacing: 3px;
        }
    }

    &-input-group {
        flex: 1;
        display: flex;
        justify-content: space-between;

        .input {
            box-sizing: border-box;
            width: 212px;
            height: 42px;
            background: #F4F4F4;
            border-radius: 27px;
            outline: none;
            border: none;
            padding-left: 1em;

            &::-webkit-input-placeholder {
                /* Chrome/Opera/Safari */
                color: #7E7E7E;
            }

            &::-moz-placeholder {
                /* Firefox 19+ */
                color: #7E7E7E;
            }

            &::-ms-input-placeholder {
                /* IE 10+ */
                color: #7E7E7E;
            }

            &::-moz-placeholder {
                /* Firefox 18- */
                color: #7E7E7E;
            }
        }

        .code-wrap {
            position: relative;

            .code {
                padding-right: 97px;
            }

            .get-code-btn {
                position: absolute;
                right: 16px;
                top: 50%;
                // top: 50%;
                transform: translateY(-50%);
                color: #BC2A34;
                cursor: pointer;
                -webkit-user-select: none;
                border-left: 1px solid #D8D8D8;
                padding-left: 10px;
                border-radius: 1px;
            }
        }

        .submit-btn {
            width: 212px;
            height: 42px;
            background: #BC2A34;
            border: none;
            border-radius: 24px;
            font-size: 16px;
            font-weight: 500;
            color: #FFFFFF;
        }
    }
}


@keyframes fadeIn {
    0% {
        opacity: 1;
    }

    50% {
        opacity: .2;
    }

    100% {
        opacity: 1;
    }
}
</style>