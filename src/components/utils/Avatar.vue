<template>
    <img :src="src" />
</template>

<script setup>
defineProps({
    src: {
        type: String
    }
})
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
</style>