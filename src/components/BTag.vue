<template>
    <span :class="type"><slot></slot></span>
</template>
<style>
</style>
<script>
    export default{
        props:{
            type:{
                default:"default"
            }
        }
    }
</script>
