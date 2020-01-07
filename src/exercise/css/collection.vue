<template>
    <section>
        <!-- 网格线 -->
        <div class="c1"></div>
        <!-- 2020图案 -->
        <div class="c2">
            <figure>
                <!-- 数字2 -->
                <span class="two part1"></span>
                <span class="two part2"></span>
                <span class="two part3"></span>
                <span class="two part4"></span>
                <!-- 数字0 -->
                <span class="zero copy1"></span>
                <span class="zero copy2"></span>
                <!-- 文字 -->
                <!-- grid布局下会自动把未指定的grid-area 属性的元素排放在未被占用的网格中 -->
                <span class="text happy">happy</span>
                <span class="text new">new</span>
                <span class="text year">year</span>
            </figure>
        </div>
    </section>
</template>
<style lang="less" scoped>
body {
    background: azure;
}
.c1 {
    width: 12em;
    height: 9em;
    background-size: 3em 3em;
    background-color: teal;
    background-image: 
        linear-gradient(to bottom, transparent 95%, white 95%),
        linear-gradient(to right, transparent 95%, white 95%),
        linear-gradient(to top, transparent 95%, white 95%),
        linear-gradient(to left, transparent 95%, white 95%);
    background-repeat: repeat, repeat, repeat-x, repeat-y;
    // 水平重复 | 垂直重复 | 自定义重复
}

.c2 {
    margin-top: 1em;
    padding: 2em;
    background-color: darkred;
    figure {
        display: grid;
        width: 16em;
        height: 6em;
        grid-template-columns: repeat(8, 2em);
        grid-template-rows: repeat(3, 2em);
        color: whitesmoke;
        // background-size: 2em 2em;
        // background-image: 
        //     linear-gradient(to bottom, transparent 95%, pink 95%),
        //     linear-gradient(to right, transparent 95%, pink 95%),
        //     linear-gradient(to top, transparent 95%, pink 95%),
        //     linear-gradient(to left, transparent 95%, pink 95%);
        // background-repeat: repeat, repeat, repeat-x, repeat-y;
        .two {
            background-color: currentColor;
            // 复制 偏移量
            filter: drop-shadow(8em 0);
            &.part1 {
                grid-area: ~"1/1";
                border-radius: 100% 0 0 0;
            }
            &.part2 {
                grid-area: ~"2/2";
                border-radius: 0 0 100% 0;
            }
            &.part4 {
                grid-area: ~"3/2";
                border-radius: 0 0 0 100%;
            }
            &.part3 {
                grid-area: ~"3/1";
                border-radius: 100% 0 0 0;
            }
        }
        .zero {
            width: 0;
            height: 0;
            border: 2em solid;
            border-color: currentColor transparent;
            border-radius: 50%;
            transform: rotate(-45deg);
            animation: round 4s linear infinite;
            &.copy1 {
                grid-area: ~"2/3/4/5";
            }
            &.copy2 {
                grid-area: ~"2/7/4/9";

            }
        }
        .text {
            text-transform: uppercase;
            color: #fff;
            font-size: 1.2em;
            line-height: 1.5em;
            font-weight: bold;
            font-family: fantasy;
            padding-left: 0.25em;
            // 色彩混合模式，重叠部分阴影
            mix-blend-mode: difference;
            &.happy {
                grid-area: ~"1/2";
            }
            &.new {
                grid-area: ~"2/4";
            }
            &.year {
                grid-area: ~"1/6";
            }
        }
    }
}

@keyframes round {
    to {
        transform: rotate(calc(-45deg + -1turn));
    }
}
</style>