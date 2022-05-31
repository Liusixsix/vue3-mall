<template>
    <span class="city-container"><i class="iconfont icon-dingwei"></i> {{ state?.name }}
        <div class="city-select-poppver-wrap">
            <div class="city-select-poppver">
                <div class="city-select-poppver-header">
                    <div class="city-select-poppver-header-item" v-for="(item, index) in headerArr" :key="item"
                        @click="changeHeaderIndex(index)" :class="{ 'is-active': index === activeHeaderIndex }">
                        {{
                                item
                        }}
                    </div>
                </div>
                <div class="line">
                    <div :style="sliderStyle" class="line-slider"> </div>
                </div>
                <div class="city-select-poppver-content">
                    <div class="city-select-poppver-content-item" v-for="city in cityList" :key="city.id"
                        :class="{ 'is-active': city.id === currentCity?.id }" @click="handleClickCity(city)">{{
                                city.name
                        }}
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>


<script lang="ts" setup>
import cityJson from '@/components/city-select/city.js'
import { useStorage } from '@vueuse/core'
import type { ICity } from './type'
import { initMap } from './utils'

const headerArr = ref<Array<string>>(["ABC", 'DEF', 'GHJ', 'KLM', 'NPQ', 'RST', 'WXYZ'])
const activeHeaderIndex = ref<number>(0)
const currentCity = ref<ICity | null>(null)

const state = useStorage('my-city', currentCity.value,
    undefined,
    {
        serializer: {
            read: (v: any) => v ? JSON.parse(v) : null,
            write: (v: any) => JSON.stringify(v),
        },
    })


const sliderStyle = computed(() => {
    return {
        transform: `translateX(${activeHeaderIndex.value * 35 + 16}px)`
    }
})



const cityList = computed(() => {
    const filterKeys = headerArr.value[activeHeaderIndex.value].split('')
    const result: ICity[] = []
    for (const key in cityJson) {
        if (filterKeys.includes(key)) {
            result.push(...cityJson[key][0])
        }
    }
    return result
})


const changeHeaderIndex = (index) => {
    activeHeaderIndex.value = index
}

const handleClickCity = (city: ICity) => {
    currentCity.value = city
    currentCity.value.key = headerArr.value[activeHeaderIndex.value]
    state.value = city
    location.reload()
}

const findCityByName = (name: string) => {
    for(const key in cityJson) {
        for(const item of cityJson[key][0]) {   
            if(item.name === name) {
                state.value = item
                state.value.key = headerArr.value[headerArr.value.findIndex(item=>item.split('').includes(key))]
                _initCity()
                return item
            }
        }
        
    }
}


const _initCity = () => {
    if (state.value) {
        currentCity.value = state.value
        activeHeaderIndex.value = headerArr.value.findIndex(item => item === currentCity.value?.key)
        return
    }

    initMap().then(res => {
        const geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(
            (position) => {
                let city = position.address.city; //获取城市信息
                if (city.indexOf('市') > -1) {
                    city = city.substring(0, city.length - 1)
                }
                findCityByName(city)
            },
            (e) => {
              
            },
            {
                provider: "baidu",
            }
        );

    })
}


onBeforeMount(() => {
    _initCity()
})

</script>

<style lang="scss" scoped>
.city-container {
    position: relative;

    &:hover {
        .city-select-poppver-wrap {
            display: block;
            padding-top: 10px;
            animation: dialog-fade-in 0.2s linear 1;
        }

        .city-select-poppver {
            display: block;
            // animation: dialog-fade-in 0.2s linear 1;
        }
    }

    .iconfont {
        font-size: $size-small;
        vertical-align: bottom;
        display: inline-block;
    }

    .city-select-poppver {
        display: none;
        position: absolute;
        z-index: 999;
        bottom: -138px;
        left: -30px;
        height: 138px;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        transform-origin: 0% -4px;
        transition: all .1s ease-in-out;

        .city-select-poppver-header {
            display: flex;
            color: #999999;
            height: 37px;
            padding: 0 16px;
            align-items: center;
            font-size: $size-small;
            justify-content: space-between;

            &-item {
                width: 35px;
                text-align: center;

                &.is-active {
                    color: #BC2A34;
                }
            }
        }

        .line {
            height: 1px;
            background: #EDEDED;
            position: relative;

            .line-slider {
                position: absolute;
                left: 0px;
                height: 1px;
                width: 30px;
                background-color: #BC2A34;
                transition: all .2s ease-in-out;
            }
        }

        .city-select-poppver-content {
            display: flex;
            flex-wrap: wrap;
            background: #fff;
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
            padding: 12px 24px;
            overflow: hidden;
            border-radius: 4px;

            &-item {
                margin-right: 12px;
                width: 48px;

                font-size: 12px;
                line-height: 24px;
                color: #333333;
                overflow: hidden;
                white-space: nowrap;

                text-overflow: ellipsis;

                -o-text-overflow: ellipsis;

                &:nth-child(4n) {
                    margin-right: 0;
                }

                &:hover {
                    color: #BC2A34;
                }

                &.is-active {
                    color: #BC2A34;
                }
            }
        }
    }
}

@keyframes dialog-fade-in {

    0% {
        transform: scale(0)
    }

    100% {
        transform: scale(1);

    }

}
</style>