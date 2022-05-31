<template>
    <button class="login-btn">登录/注册</button>
</template>

<style lang="scss" scoped>
.login-btn {
    display: inline-block;
    width: 108px;
    height: 28px;
    font-size: $size-small;
    border-radius: 14px;
    outline: none;
    border: none;
    background-color: $bg-white;
    color: #333333;
    margin-left: 12px;


    &:active {
        background-color: #e3dcdc;
    }


    &.bg-btn {
        background-color: $bg-active ;
        color: $color-white;

        &:hover {
            background-color: #d83b46;
        }

        &:active {
            background-color: #e75861;
        }
    }
}
</style>