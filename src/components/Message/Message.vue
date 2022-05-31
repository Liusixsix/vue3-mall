<template>
  <transition name="i-message-fade">
    <div v-show="visible" :style="{ top: top + 'px',zIndex:zIndex }" :class="['i-message-wrap', type]">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">

let t = null

const state = reactive({
  visible: false,
  top: 0,
  zIndex:2000
})

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 5000,
  },
  type: {
    validator(value: string) {
      // 这个值必须与下列字符串中的其中一个相匹配
      return ['success', 'warning', 'message', 'error'].includes(value)
    }
  }
});

const setVisible = (isVisible: boolean) => {
  return new Promise(resolve => {
    state.visible = isVisible
    t = setTimeout(() => {
      clearTimeout(t)
      t = null
      resolve('')
    }, 300)
  })
}

const setTop = (top:number)=>{
  state.top = top
}

const setzIndex = (index:number)=>{
  state.zIndex = index
}
defineExpose({
  setVisible,
  setTop,
  setzIndex,
  height: 40,
  margin: 20
})

const { visible, top,zIndex } = toRefs(state)
</script>



<style lang="scss">
.i-message-wrap {
  min-width: 360px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 50%;
  // transform: translateX(-50%);
  margin-left: -180px;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  transition: all .3s ease-in;

  &.success {
    background: #f0f9eb;
    color: #529b2e;
  }

  &.message {
    background: #fdf6ec;
    color: #b88230;
  }

  &.error {
    background: #fef0f0;
    color: #c45656;
  }

  &.warning {
    background: #f4f4f5;
    color: #73767a;
  }
}

.i-message-fade-enter-active {
  transition: all .3s ease-in;
}

.i-message-fade-enter-active {
  transition: all .3s ease-out;
}

.i-message-fade-enter-from,
.i-message-fade-leave-to {
  // transition: all 0.3s;
  transform: translateY(-20px);
  opacity: 0;
}
</style>