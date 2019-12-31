<template>
    <section class="cable">
        <span class="head"></span>
        <span class="body"></span>
    </section>
</template>
<style lang="less" scoped>
body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.cable {
    display: flex;
    align-items: center;
    font-size: 10px;
    margin-left: 5em;
    // 增加入场动画
    animation: show 5s linear infinite;
}

.head {
    position: relative;
    width: 8.5em;
    height: 8.5rem;
    border-radius: 2em 0 0 2em;
    // 插头渐变色
    background: 
        // 阴影更立体
        linear-gradient(
            90deg,
            transparent 80%,
            rgba(0,0,0,12%)
        ),
        linear-gradient(
            -45deg, 
            hsl(0, 0%, 75%),
            hsl(0, 0%, 79%),
            hsl(0, 0%, 78%),
            hsl(0, 0%, 78%) 80%
        );
    // 插头针脚轮廓
    &::before {
        content: '';
        position: absolute;
        width: 3em;
        height: 7.3em;
        top: calc((8.5em - 7.3em) / 2);
        left: 0.7em;
        border-radius: 1em;
        box-sizing: border-box;
        background-color: #fff;
    }

    &::after {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: 2.2em;
        height: 0.4em;
        color: goldenrod;
        background-color: currentColor;
        border-radius: 0.5em;
        left: 1.1em;
        top: 1.2em;
        box-shadow: 
            0 0.8em 0,
            0 1.6em 0,
            0 2.4em 0,
            0 3.2em 0,
            0 4em 0,
            0 4.8em 0,
            0 5.6em 0;

    }
}

//线缆手持部位轮廓
.body {
    position: relative;
    display: flex;
    align-items: center;
    width: 15.5em;
    height: 11em;
    border-radius: 0.5em;
    // 手持部位渐变色
    background: linear-gradient(
        hsl(0, 0%, 91%),
        white 15%, 
        hsl(0, 0%, 93%) 50%,
        hsl(0, 0%, 87%) 70%,
        hsl(0, 0%, 79%) 90%,
        hsl(0, 0%, 86%)
    );

    // 稍粗部位轮廓
    &::before {
        content: '';
        position: absolute;
        width: 13.5em;
        height: 6em;
        left: 15.5em;
        // 渐变色
        background: 
        // 阴影更立体
        linear-gradient(
            45deg,
            transparent 20%,
            rgba(0,0,0,4%) 10%
        ),
        // 阴影更立体
        linear-gradient(
            90deg,
            transparent 10%,
            rgba(0,0,0,4%)
        ),
        linear-gradient(
            white, 
            hsl(0, 0%, 96%) 5%,
            hsl(0, 0%, 98%) 20%,
            hsl(0, 0%, 95%) 50%,
            hsl(0, 0%, 81%) 95%,
            white
        );
    }

    // 延长线部位
    &::after {
        content: '';
        position: absolute;
        width: 100vh;
        height: 3.9em;
        left: calc(15.5em + 13.5em);
        // 渐变色
        background: 
        // 阴影更立体
        linear-gradient(
            45deg,
            transparent 4%,
            rgba(0,0,0,4%)
        ),
        // 阴影更立体
        linear-gradient(
            90deg,
            transparent 2%,
            rgba(0,0,0,4%)
        ),
        linear-gradient(
            white, 
            hsl(0, 0%, 96%) 5%,
            hsl(0, 0%, 97%) 25%,
            hsl(0, 0%, 95%) 40%,
            hsl(0, 0%, 81%) 95%,
            white
        );
    }
}

@keyframes show {
    0% {
       transform: translateX(100vw); 
    }
    20%, 100% {
        transform: translateX(0);
    }
}
</style>