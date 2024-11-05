<template>

    <div class="content">

        <div class="info">

            <PersonInfo />

            <Devide class="devide" />

            <div class="intro">

                <p>这里玖叁，计算机苦手，基本写不太出入得了眼的东西。</p>

                <p>个人博客 👉 <a href="//blog.fur93.icu">玖叁的知识库</a></p>

                <p>主要擅长 NodeJS ( TypeScript & JavaScript ) 相关 ( Nest.js & Nextjs & Express.js & React & Vue 3 )、Web 相关、Andorid 原生相关 ( Kotlin & Compose )、数据库相关 ( Postgres & MongoDB & MySQL & SQLite )、Redis ，单片机 ( Arduino ) 与 C# .NET ( Avalonia ) 入门。</p>

                <p>同时相对擅长 Web 与之对应的基础与部署 ( Nginx & Docker & Docker Compose & Kubernetes )。</p>

            </div>

        </div>

        <div class="badge">

            <Badage icon="furdevscn" href="https://github.com/FurDevsCN" content="FurDevsCN" />

            <Badage icon="github" href="https://github.com/colour93" content="colour93" />

            <Badage icon="twitter" href="https://twitter.com/colour93" content="colour93" />

            <Badage icon="bilibili" href="https://space.bilibili.com/12583120" content="路过的玖叁" />

            <Badage icon="mail" href="mailto:x@fur93.icu" content="x@fur93.icu" />

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
