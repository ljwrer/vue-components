<template>
    <body-row :row-data="rowData" :before="before">
        <template v-if="index===0">
            <td  :rowspan="length"><input type="checkbox" @change="options.handle.checkAll"></td>
        </template>
    </body-row>
</template>
<style>
</style>
<script>
    import BodyRow from './BodyRow'
    export default{
        data(){
            return {
                before:true
            }
        },
        props:{
            rowData:null,
            length:null,
            index:null,
            options:null
        },
        components:{
            BodyRow
        }
    }
</script>
