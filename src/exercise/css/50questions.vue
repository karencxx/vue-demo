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
        <h5>padding-top</h5>
        <p style="background: #eee;">Another way to set an image's aspect ratio is through image attributes. If you know the dimensions of the image ahead of time, it is a best practice to set these dimensions as its width and height.   
For our example above, knowing the dimensions are 800px by 600px, the image markup would look like: <img src="image.jpg" alt="..." width="800" height="600">. If the image sent has the same aspect ratio, but not necessarily those exact pixel values, we could still use image attribute values to set the ratio, combined with a style of width: 100% so that the image takes up the proper space. All together that would look like:
        </p>
        <div class="container">
            <img class="media" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG" alt="">
        </div>
        <p style="background: #777;">Another way to set an image's aspect ratio is through image attributes. If you know the dimensions of the image ahead of time, it is a best practice to set these dimensions as its width and height.   
For our example above, knowing the dimensions are 800px by 600px, the image markup would look like: <img src="image.jpg" alt="..." width="800" height="600">. If the image sent has the same aspect ratio, but not necessarily those exact pixel values, we could still use image attribute values to set the ratio, combined with a style of width: 100% so that the image takes up the proper space. All together that would look like:
        </p>
        <h5>aspect-ratio</h5>
        <div class="container2">
            <img class="media" src="https://staticimg.ngmm365.com/f2455021b1ecdf9f4cba5062898c7da6-w601_h601.JPG" alt="">
        </div>
        <p>Another way to set an image's aspect ratio is through image attributes. If you know the dimensions of the image ahead of time, it is a best practice to set these dimensions as its width and height.   
For our example above, knowing the dimensions are 800px by 600px, the image markup would look like: <img src="image.jpg" alt="..." width="800" height="600">. If the image sent has the same aspect ratio, but not necessarily those exact pixel values, we could still use image attribute values to set the ratio, combined with a style of width: 100% so that the image takes up the proper space. All together that would look like:
        </p>
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

.container {
    // display: none;
    position: relative;
    width: 100%;
    padding-top: 75%; // 16:9 
    background: #000;
    object-fit: contain;

    .media {
        position: absolute;
        top: 0;
        width: inherit;
        height: 100%;
        object-fit: contain;
    }
}

.container2 {
    display: none;
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    background: #000;
    object-fit: contain;

    .media {
        position: absolute;
        top: 0;
        width: inherit;
        // aspect-ratio: 8 / 6;
    }
}
</style>