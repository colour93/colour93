<!-- 分割线 -->

<template>
    <div :style="`border:1px solid var(--bg-grey); opacity: 0.5; float:left; height:${height};`"></div>
</template>

<script setup>

// import { defineProps } from 'vue';

defineProps({
    height: {
        type: String,
        default: '320px'
    }
})

</script>