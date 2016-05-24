<template>
    <body-row ...options>
        <td v-if="index===0"  :rowspan="length"><input type="checkbox" @change="options.handle.checkAll"></td>
    </body-row>
</template>
<style>
</style>
<script>
    import BodyRow from './BodyRow'
    export default{
        props(){
            index,length,options
        },
        components:{
            BodyRow
        }
    }
</script>
