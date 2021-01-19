<template>
    <div>
        <test-comp :data="item" v-for="(item,index) in itemsArray" :key="index">
            <div slot="line">=======line{{ item.id }}=======</div>
        </test-comp>
        <div style="margin-top: 20px;">
            <button @click="handle">unshift first</button>
        </div>
    </div>
</template>
<script>
import api from '@/axios/api'
import Vue from 'vue'
import testComp from './test-comp'
export default Vue.extend({
    components:{
        testComp
    },
    data() {
       return {
           itemsArray: []
       }
    },
    mounted() {
        
        api.JH_news('/get/random', 'post')
        .then(res => {
            this.itemsArray = res.list;
            // setTimeout(() => {
            //     this.itemsArray.splice(2, 0, 'fff')
            // }, 2000);
        })
    },
    methods: {
        handle() {
            this.itemsArray.unshift({
                id: 11,
                word: 'wfuqo',
                date: '2021-01-06 17:22:30',
                isCheck: true
            })
        }
    }
})
</script>