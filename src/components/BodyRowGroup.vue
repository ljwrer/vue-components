<template>
    <body-row
        :row-data="rowData"
        :has-before="hasCheckBox&&rowIndex===0"
        :row-span="rowSpan"
        :on-row-click="onRowClick"
        :row-index="rowIndex"
        :group-index="groupIndex"
        :operates="operates">
        <input
            v-if="hasCheckBox&&rowIndex===0"
            :checked="checkAll"
            type="checkbox"
            @change="onCheckAll"/>
    </body-row>
</template>
<style>
</style>
<script type="text/babel">
    import BodyRow from './BodyRow'
    export default{
        props: {
            onRowClick: {
                type: Function,
                default(){}
            },
            statusType: {
                type: String,
                default: ''
            },
            statusText: {
                type: String
            },
            rowIndex: {
                type: Number
            },
            groupIndex:{
                type:Number
            },
            rowSpan: {
                type: Number
            },
            hasCheckBox: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            },
            onCheck: {
                type: Function
            },
            rowData: {
                type: [Array, Object]
            },
            operates: {
                type: [Array, Object]
            },
            hasBefore:{
                type:Boolean,
                default:false
            },
            onCheckAll:{
                type:Function,
                default(){}
            },
            checkAll:{
                type:Boolean,
                default:false
            }
        },
        components: {
            BodyRow
        }
    }
</script>
