<template>
    <section>
        <div class="cube-1"></div>
        <div class="cube"></div>
        <div class="cube cube-2"></div>
        <div class="cube cube-2 cube-2-1"></div>
        <div class="cube cube-3"></div>
        <div class="cube cube-4"></div>
        <div class="cube cube-5"></div>
        <blockquote></blockquote>
    </section>
</template>
<style lang="less" scoped>
div {
    margin: 10px;
    box-sizing: content-box;
}
.cube-1 {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-right: 40px solid transparent;
    border-left: 40px solid transparent;
    border-bottom: 40px solid #F44336;
}

.cube {
    width: 40px;
    height: 40px;
    border-right: 20px solid #00BCD4;
    border-top: 20px solid #8BC34A;
    border-left: 20px solid #9C27B0;
    border-bottom: 20px solid #FFEB3B;
    background: transparent;
    background-clip: content-box;

    &-2 {
        width: 0;
        height: 0;
        border-width: 40px;
        &-1 {
            border-left-style: double;
        }
    }

    &-3 {
        border-left-color: transparent;
    }

    &-4 {
        border-radius: 100%;
    }

    &-5 {
        border-style: double;
    }
}

</style>