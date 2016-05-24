<template>
    <button @click="onClick"><slot></slot></button>
</template>
<script type="text/babel">
    export default{
        props:{
            onClick:null
        }
    }
</script>
