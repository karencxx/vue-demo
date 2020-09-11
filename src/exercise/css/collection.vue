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
        <div class="c3">
            <figure class="snow-flake">
                <!-- 雪花的6个花瓣 -->
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <!-- 雪花上的 -->
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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

.c3 {
    width: 13em;
    height: 13em;
    margin-top: 10px;
    padding: 0.5em;
    background-color: #000;
    box-sizing: border-box;
    .snow-flake {
        position: relative;
        width: 6em;
        height: 6em;
        margin: 0 auto;
        color: snow;
        animation: round-snow 10s linear infinite;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width: 0.2em;
        height: 3em;
        left: 50%;
        background-color: currentColor;
        border-radius: 0.05em;
        transform-origin: bottom;
        transform: rotate(calc((var(--n) - 1) * 60deg));

        &:nth-child(1) {
            --n: 1;
        }
        &:nth-child(2) {
            --n: 2;
        }
        &:nth-child(3) {
            --n: 3;
        }
        &:nth-child(4) {
            --n: 4;
        }
        &:nth-child(5) {
            --n: 5;
        }
        &:nth-child(6) {
            --n: 6;
        }

        span:nth-child(1) {
            width: 0.4em;
            height: 0.4em;
            background-color: currentColor;
            border-radius: 100%;
        }

        span:nth-child(2),
        span:nth-child(3),
        span:nth-child(4),
        span:nth-child(5) {
            width: var(--side-length);
            height: var(--side-length);
            border: 0.2em solid;
            border-width: 0.2em;
            border-style: none solid solid none;
            border-radius: 0.05em;
            transform: rotate(45deg);
        }

        span:nth-child(2) { 
            --side-length: 1em;
            margin-top: -0.2em;
        }

        span:nth-child(3) { 
            --side-length: 0.8em;
        }

        span:nth-child(4) { 
            --side-length: 0.6em;
        }

        span:nth-child(5) { 
            --side-length: 0.4em;
        }
    }
}

@keyframes round {
    to {
        transform: rotate(calc(-45deg + -1turn));
    }
}

@keyframes round-snow {
    to {
        transform: rotate(1turn);
    }
}
</style>