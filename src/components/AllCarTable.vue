<template>

</template>
<style>

</style>
<script>
    import ScrollTable from './ScrollTable'
    export default{
        mixins:[ScrollTable],
        methods:{
            pick(data){
                alert(data)
            }
        }
    }
</script>
