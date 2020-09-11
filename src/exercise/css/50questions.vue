<template>
    <section>
        满屏品字
        <div class="div1">
            <p></p>
            <div class="flex-box">
                <p></p>
                <p></p>
            </div>
        </div>
        visibility: collapse
        <div class="div3" style="visibility: collapse;"></div>
        visibility: hidden
        <div class="div3" style="visibility: hidden;"></div>
        hidden
        <div class="div3" hidden></div>
        display: none
        <div class="div3" style="display: none;"></div>
        table
        <table>
            <tr>
                <td>1.1</td>
                <td style="visibility: collapse;">1.2</td>
                <td>1.3</td>
            </tr>
            <tr style="visibility: collapse;">
                <td>2.1</td>
                <td>2.2</td>
                <td>2.3</td>
            </tr>
            <tr>
                <td>3.1</td>
                <td>3.2</td>
                <td>3.3</td>
            </tr>
            <tr style="visibility: hidden;">
                <td>3.1</td>
                <td>3.2</td>
                <td>3.3</td>
            </tr>
        </table>
        常见兼容性问题
        <ul class="div2">
        </ul>
        position,display,float叠加
        <div class="div4">多个叠加</div>
        float
        没有浮动
        <p><img class="inline-img" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG">一行普通的文字里有个<em>em</em>标签, 还有个图片<img class="inline-img" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG">啦啦啦，怎么还不换行</p>
        图片浮动
        <p>一行普通的文字里有个<em>em</em>标签, 还有个图片<img class="inline-img" style="float: left;" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG">啦啦啦，怎么还不换行<img class="inline-img" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG"></p>

        <div class="float-div">
            <div class="div3">1</div>
            <div class="div3">2</div>
            <!-- 消除float -->
            <!-- <div style="clear: both;"></div> -->
        </div>

        <div class="box">
            <div style="float: left;background: #fff;height: 100px;border: 4px solid #000;">I am a floated box!</div>
            <p>I am content inside the container.</p>
        </div>
      
        <div class="blue"></div>
        <div class="red-outer">
            <div class="red-inner">red inner</div>
        </div>
    </section>
</template>
<style lang="less" scoped>
.div1 {
    width: 200px;
    height: 200px;
    border: 1px solid #eee;

    p {
        margin: 0 auto;
        width: 90px;
        height: 90px;
        border: 2px solid #000;
    }

    .flex-box {
        display: flex;
        justify-content: center;
        margin-top: 10px;

        p {
            margin: 0;
        }
    }
}

.div2 {
    margin: 0;
    padding: 0;
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
}

.div3 {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}

.div4 {
    position: absolute;
    display: block;
    float: right;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    background: #8BC34A;
    overflow: hidden;
}

.inline-img {
    width: 50px;
}

.float-div {
    margin: 40px 0;
    border: 4px solid #a0b3d6;
    zoom: 1;

    &::after {
        display: block;
        content: '';
        clear: both;
        line-height: 0;
        visibility: hidden;
    }

    .div3 {
        float: left;
        font-size: 15px;
        // display: inline-block; 设置了float后，display重新计算为block
        border: 4px solid #ff6633; 
        background: #ffffc0;
    }
}

.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
    display: flow-root;
}

.blue, .red-inner {
    height: 50px;
    margin: 10px 0;
}

.blue {
    background: blue;
}

.red-outer {
    margin-top: 10px;
    overflow: hidden;
    background: red;
}
</style>