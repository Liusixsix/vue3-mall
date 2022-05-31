<template>
    <div class="search-container">
        <input placeholder="请输入内容" type="text" class="search-input">
        <i class="iconfont icon-sousuo"></i>
    </div>
</template>

<style lang="scss" scoped>
.search-container {
    position: relative;
    width: 226px;
    height: 28px;
    border-radius: 14px;
    border: 1px solid #FFFFFF;

    &.bg-search {
        border: 1px solid #EDEDED;

        .search-input {
            color: $color-black;

            &::-webkit-input-placeholder {

                color: #999999;
            }

            &::-moz-placeholder {

                color: #999999;
            }

            &::-ms-input-placeholder {

                color: #999999;
            }

            &::-moz-placeholder {

                color: #999999;
            }
        }
    }

    .iconfont {
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 13px;
    }

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
</style>