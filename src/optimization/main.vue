<template>
    <div>
        <!-- <template v-for="item in 1">
            <funcComp :value="item%2" :key="item" :index="item" />
        </template> -->
        <div :style="{ opacity: number / 300}">
            <!-- <div>{{ heavy() }}</div> -->
            <div>{{ heavy1 }}</div>
            <!-- <ChildComp /> -->
        </div>
        <p><a href="tel:10086">打电话给10086</a></p>
        <p><a href="sms:10086">发短信给10086</a></p>
        <p><a href="mailto:caixiaoxiao@nicomama.com">发邮件</a></p>
        <p><input type="file" accept="image/*"></p>
        <p><input type="file" accept="video/*"></p>
        <p><input type="file" multiple></p>
        <!-- 纯数字 -->
        <p><input type="number" pattern="\d*"></p>
        <p><input type="tel"></p>

        <!-- 打开微信 -->
        <p><a href="weixin://">打开微信</a></p>

        <!-- 打开支付宝 -->
        <p><a href="alipays://">打开支付宝</a></p>

        <!-- 打开支付宝的扫一扫 -->
        <p><a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫</a></p>

        <!-- 打开支付宝的蚂蚁森林 -->
       <p> <a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a></p>
    </div>
</template>
<script>
import funcComp from './funcComp'

export default {
    components: {
        // funcComp,
        // ChildComp: {
        //     methods: {
        //         heavy () {
        //             const n = 100000
        //             let result = 0
        //             for (let i = 0; i < n; i++) {
        //                 result += Math.sqrt(Math.cos(Math.sin(42)))
        //             }
        //             return result
        //         }
        //     },
        //     render (h) {
        //         return h('div', this.heavy())
        //     }
        // }
    },
    data() {
        return {
            flag: true,
            number: 300
        }
    },
    computed: {
        heavy1 ({flag, number}) {
            console.log(flag, 'this', number)
            const n = 100000
            let result = 0
            for (let i = 0; i < n; i++) {
                result += Math.sqrt(Math.cos(Math.sin(42)))
            }
            return result
        }
    },
    methods: {
        // heavy () {
        //     const n = 100000
        //     let result = 0
        //     for (let i = 0; i < n; i++) {
        //         result += Math.sqrt(Math.cos(Math.sin(42)))
        //     }
        //     return result
        // }
    }
}
</script>