<!-- 个人信息 -->

<template>

    <div class="box">

        <Avatar src="/avatar.jpg" class="avatar" />

        <div class="info">

            <p class="nickname">玖叁</p>

            <p class="username">colour93</p>

            <p ckass="bio">想做的，能做的，去做的。</p>

        </div>

    </div>


</template>

<script setup>

import { ref } from 'vue';
import Avatar from './utils/Avatar.vue';


</script>

<style scoped>
p {
    margin: 0;
}

.avatar {
    width: 200px;
    height: 200px;
}

.nickname {
    font-size: 42px;
    font-weight: bold;
}

@media screen and (max-width: 768px) {

    .box {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 96px;
        height: 96px;
        margin-right: 10px;
    }

}
</style>