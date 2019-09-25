<template>
    <div>
        <lottie :options="defaultOptions" :height="200" :width="200" :animCreated="handleAnimation" />
        <!-- <object data="../assets/demo.svg" type="image/svg+xml"></object> -->
        <img src="../assets/demo.svg"  />
        <img src="../assets/logo.png" alt="">
        <div class="bg"></div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
        </svg>
    </div>
</template>
<script>
import lottie from 'vue-lottie'
import * as animationData from './clickAnimation.json'

export default {
    components: {
        lottie
    },
    data() {
        return { // 添加相应属性
            defaultOptions: {
                animationData: animationData
            },
            animationStep: 1,
            anim: {}
        }
    },

    methods: {
        handleAnimation(anim) {
            this.anim = anim
            console.log(anim)
        }
    }
    
}
</script>
<style lang="less" scoped>
.bg {
    background: url('../assets/demo.png') no-repeat;
}
</style>