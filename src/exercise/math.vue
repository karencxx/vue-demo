<template>
    <div class="wrap">
        <!-- 多选按钮，四则运算 -->
        <div class="choose-type">
            <input type="radio" id="addition" name="arithmetic-type" value="1" >
            <label for="addition">addition</label>
            <input type="radio" id="subtraction" name="arithmetic-type" value="2" >
            <label for="subtraction">subtraction</label>
            <input type="radio" id="multiplication" name="arithmetic-type" value="3" >
            <label for="multiplication">multiplication</label>
            <input type="radio" id="division" name="arithmetic-type" value="4" >
            <label for="division">division</label>
        </div>
        <!-- 成绩统计数据 -->
        <div class="score">
            <span>ROUND 15</span>
            <span>SCORE 88%</span>
        </div>
        <!-- 算式 -->
        <div class="epression">
            <span class="number">10</span>
            <span class="operation">+</span>
            <span class="number">20</span>
            <span class="operation">=</span>
            <span class="button show">?</span>
            <span class="result">30</span>
        </div>
        <!-- 判断答题是否正确 -->
        <div class="jugement">
            <span class="button right">✔</span>
            <span class="button wrong">✘</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(lightyellow, tan);
}

.wrap {
    // width: 66vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1em 4em rgba(0, 0, 0, 0.5);
    border-radius: 2em;
    padding: 8em 5em;
    background: linear-gradient(black, dimgray, black);
    font-family: sans-serif;
    font-size: 1wh;
    user-select: none;
}

.choose-type input[name=arithmetic-type] {
    position: absolute;
    visibility: hidden;

    &:checked + label {
        text-transform: capitalize;
        color: deepskyblue;
        border-style: solid;
        border-width: 0 0 0.1rem 0;
    }
}

.choose-type label {
    position: relative;
    font-size: 2.5em;
    color: skyblue;
    margin: 0.3em;
    letter-spacing: 0.02em;
    transition: 0.3s;

    &:hover {
        color: deepskyblue;
        cursor: pointer;
    }

    &:not(:first-of-type)::before { 
        // 加入分割线
        content: '|';
        position: absolute;
        color: skyblue;
        left: -.5em;
        filter: opacity(0.6);
    }
}

.score {
    font-size: 2em;
    color: silver;
    margin: 1em 0 2em 0;
    width: 45%;
    display: flex;
    justify-content: space-between;
}

.expression {
    font-size: 12em;
    display: flex;
    align-items: center;

    span {
        margin: 0 0.05rem;

        &.number {
            color: orange;
        }

        &.operation {
            color: skyblue;
        }

        &.result {
            color: gold;
        }
    }

    .show {
        color: skyblue;
        font-size: 0.8em;
        line-height: 1em;
        width: 1.5em;
        text-align: center;
    }

    .button {
        background-color: #222;
        border: 1px solid #555;
        padding: 0.1em;

        &:hover {
            background-color: #333;
            cursor: pointer;
        }

        &:active {
            background-color: #222;
        }
    }
}

.jugement {
    font-size: 8em;
    align-self: flex-end;

    .wrong {
        color: orangered;
    }

    .right {
        color: lightgreen;
    }
}
</style>