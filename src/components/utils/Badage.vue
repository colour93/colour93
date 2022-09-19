<template>

    <div class="box">

        <div class="icon-box">
            <div :class="`icon icon-${icon}`"></div>
        </div>

        <p><a :href="href" v-text="content" :style="`font-style: ${italic ? 'italic' : 'normal'}`"></a></p>

    </div>

</template>

<script setup>

import { ref, watch } from 'vue';

const props = defineProps({
    icon: {
        type: String
    },
    href: {
        type: String
    },
    content: {
        type: String
    }
})

// 不含汉字则可以花体
const italic = ref(/[\\u4E00-\\u9FFF]+/g.test(props.content));

</script>

<style scoped>
.box {
    display: flex;
    align-items: center;
}

.box>* {
    margin: 5px;
}

p {
    font-family: 'Maple Mono', '霞鹜文楷';
}

a {
    color: var(--text-secondary);
}

.icon-box {
    border-radius: 50%;
    height: 56px;
    width: 56px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
}

.icon {
    width: 100%;
    height: 100%;
    background-size: 32px 32px;
    background-repeat: no-repeat;
    background-position: center center;
}

@media screen and (max-width: 768px) {

    p {
        font-size: 14px;
    }

    .icon-box {
        height: 36px;
        width: 36px
    }

    .icon {
        background-size: 24px;
    }

}

.icon-github {
    background-image: url('../../assets/icons/github.svg');
}

.icon-bilibili {
    background-image: url('../../assets/icons/bilibili.svg');
}

.icon-furdevscn {
    background-image: url('../../assets/icons/furdevscn.svg');
}

.icon-mail {
    background-image: url('../../assets/icons/mail.svg');
}

.icon-twitter {
    background-image: url('../../assets/icons/twitter.svg');
}
</style>