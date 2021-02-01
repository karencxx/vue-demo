<template>
<!-- functional -->
<div class="cell">
    <div v-if="value" class="on">template {{index}}</div>
    <section v-else class="off">off {{index}}</section>
</div>
    <!-- <div class="cell">
        <div v-if="props.value" class="on">functional {{props.index}}</div>
        <section v-else class="off">off {{props.index}}</section>
    </div> -->
</template>
<script>
export default {
    props: ['value', 'index']
}
</script>