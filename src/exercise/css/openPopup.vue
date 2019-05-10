<template>
<div class="body">
    <div class="main">
        <!-- terrestrial 陆生 -->
        <a href="#terrestrial" class="open-popup">terrestrial animals</a>
        <!-- aquatic 水生 -->
        <a href="#aquatic" class="open-popup">aquatic animals</a>
    </div>
    <section id="terrestrial" class="popup">
        <a href="#" class="back"> &lt; back</a>
        <p>🦒🦏🐘🦌🐫🐂🦓🐆🐅</p>
    </section>
    <section id="aquatic" class="popup">
        <a href="#" class="back"> &lt; back</a>
        <p>🐋🐬🐙🦀🐟🐳🐠🐡🦈🦐</p>
    </section>
</div>
</template>
<style lang="less" scoped>
.body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
}
// main page layout
.main {
    height: inherit;
    background: linear-gradient(dodgerblue, darkblue);
    display: flex;
    align-items: center;
    justify-content: center;
}
.open-popup {
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
    width: 10em;
    height: 4em;
    border: 1px solid;
    text-align: center;
    line-height: 4em;
    text-decoration: none;
    text-transform: capitalize;
    margin: 1em;
    &:hover {
        border-width: 2px;
    }
}
.popup {
    position: absolute;
    top: 0;
    width: 100%;
    height: inherit;
    flex-direction: column;
    justify-content: flex-start;
    display: none;
    font-size: 35px;
    &:target {
        display: flex;
    }
    .back {
        font-size: 20px;
        font-family: sans-serif;
        text-align: center;
        height: 2em;
        line-height: 2em;
        background-color: #ddd;
        color: #000;
        text-decoration: none;
        &:visited {
            color: #000;
        }
        &:hover {
            background-color: #eee;
        }
        p {
            font-size: 30px;
            text-align: center;
            margin: 0.1em 0.05em;
        }
    }
}
// animation effects
// 内容淡入
.popup > * {
    filter: opacity(0);
    animation: fade-in 0.5s ease-in forwards;
    animation-delay: 1s;
}
@keyframes fade-in {
    to {
        filter: opacity(1);
    }
}
// 白色背景，从页面中间向上下两端展开
// 设置动画延时时长，行程大幕拉开的效果
.popup::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    top: 50%;
    background-color: #fff;
    animation: open-animate 0.5s cubic-bezier(0.8,0.2,0,1.2) forwards;
    animation-delay: 0.5s;
}
@keyframes open-animate {
    to {
        height: 100vh;
        top: 0;
    }
}
// 制作一条横线，从左端横穿到右端
.popup::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #fff;
    top: calc((100%-2px)/2);
    left: 0;
    animation: line-animate 0.5s cubic-bezier(0.8,0.2,0,1.2);
}
@keyframes line-animate {
    50%, 100% {
        width: 100%;
    }
}
</style>
