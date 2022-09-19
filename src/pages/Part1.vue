<template>

    <div class="content">

        <div class="info">

            <PersonInfo />

            <Devide class="devide" />

            <div class="intro">

                <p>这里是玖叁，2021级带专学生一枚，是一只 Furry 嗷~</p>

                <p>个人博客 👉 <a href="//blog.fur93.icu">玖叁的知识库</a></p>

                <p>是计算机苦手，基本写不太出入得了眼的东西，呜呜呜，不过我相信学习的道路是无止境的！</p>

                <p>主要擅长语言 JavaScript（NodeJS），因此 Web 前端 会些（不过审美不太行就是了），主要会 Vue3，在学 React，不过更喜欢用 NodeJS 写后端（比如
                    Express、Koa、Egg）。</p>

            </div>

        </div>

        <div class="badge">

            <Badage icon="furdevscn" href="https://github.com/FurDevsCN" content="FurDevsCN" />

            <Badage icon="github" href="https://github.com/colour93" content="colour93" />

            <Badage icon="twitter" href="https://twitter.com/colour93" content="colour93" />

            <Badage icon="bilibili" href="https://space.bilibili.com/12583120" content="路过的玖叁" />

            <Badage icon="mail" href="mailto:colour93@furdevs.cn" content="colour93@furdevs.cn" />

        </div>


    </div>

</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    widows: 100vw;
    padding: 0 40px;
}

.content>* {
    margin: 25px 0;
}

.info {
    display: flex;
    align-items: center;
}

.devide {
    margin: 0 100px;
}

.intro {
    max-width: 620px;
    text-indent: 2em;
}

.badge {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.badge>* {
    margin: 0 15px;
}

/* 响应式 - 手机 */
@media screen and (max-width: 768px) {

    .content {
        padding: 0 25px;
    }

    .info {
        flex-direction: column;
    }

    .intro {
        margin-top: 50px;
    }

    .devide {
        display: none;
    }

}
</style>

<script setup>

import PersonInfo from '../components/PesonInfo.vue';
import Devide from '../components/utils/Divide.vue';
import Badage from '../components/utils/Badage.vue';


</script>