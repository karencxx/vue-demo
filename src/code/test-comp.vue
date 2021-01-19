<template>
    <div>
        <p>word: {{ data.word }}</p> 
        <p>id: {{ data.id }}</p> 
        <p>{{ data.date }}</p> 
        <input type="text" placeholder="请填写">
        <!-- <slot name="line"></slot> -->
    </div>
</template>
<script>
import api from '@/axios/api'
import Vue from 'vue'
export default Vue.extend({
    props: ['data'],

    data() {
        return {
            isCheck: null
        }
    },
    mounted() {
        console.log('iiii,', data.id)
        api.JH_news('/get/check', 'post')
        .then(res => {
            this.isCheck = res;
        })
    }
})
</script>
<style lang="less" scoped>
div {
    display: inline-block;
    margin-right: 20px;
}
</style>