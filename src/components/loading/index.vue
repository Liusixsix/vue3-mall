<template>
    <div v-if="isShow">loading...</div>
</template>

<script setup  lang="ts">
    const isShow = ref<boolean>(false)

    const hide = () => {
        isShow.value = false
    }
    const show = () => {
        isShow.value = true
    }

    defineExpose({
        hide,
        show,
        isShow
    })
</script>