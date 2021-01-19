<template>
    <section>
        <div class="border1">
            <div class="border2">
                <div class="border3">
                    <div class="pine"></div>
                </div>
            </div>
        </div>
        <div class="border1">
            <div class="border2">
                <div class="border3">
                    <div class="pine0"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
div.border1, .border2, .border3 {
    border-radius: 50%;
}

div.border1 {
    position: relative;
    width: 200px;
    height: 200px;
    padding: 10px;
    // background: #ffc27a;
    border-radius: 50%;

    .border2 {
        width: 180px;
        height: 180px;
        padding: 10px;
        background: #ff4a4c;
    }

    .border3 {
        height: 100%;
        background: #fff;
    }

    .pine {
        width: 0;
        border: 80px solid transparent;
        border-top-color: #f8d384;
        border-radius: 80px;
        height: 80px;
        border-left-color: #f9e3bb;
        border-right-color: #ffc27a;
    }

    .pine0 {
        width: 0;
        border: 80px solid transparent;
        // border-bottom: 0;
        border-radius: 80px;
        border-left-color: #f9e3bb;
        border-right-color: #ffc27a;
        border-color: thistle forestgreen brown goldenrod;
    }
}
</style>