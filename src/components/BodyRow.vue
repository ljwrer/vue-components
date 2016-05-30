<template>
    <tr @click="onRowClick(rowIndex)" :class="statusType" :row-index="rowIndex">
        <td v-if="hasBefore" :rowspan="rowSpan">
            <slot></slot>
        </td>
        <td v-if="hasCheckBox">
            <input type="checkbox" :checked="checked" @change="onCheck(checked,rowIndex)">
        </td>
        <td v-for="row in rowData">{{row}}</td>
        <td v-if="statusType">
            <b-tag type="statusType">{{statusText}}</b-tag>
        </td>
        <td v-for="operate in operates">
            <b-button :on-click="operate.handle" :args="[groupIndex,rowIndex]">{{operate.text}}</b-button>
        </td>
    </tr>
</template>
<style scoped>
    td + td {
        border-left:1px solid #eee;
    }
    td{
        border-bottom:1px solid #eee;
        background: #ddd;
        color: #000;
        padding: 10px 25px;
    }
</style>
<script type="text/babel">
    import BButton from './BButton'
    import BTag from './BTag'
    export default{
        props: {
            onRowClick: {
                type: Function,
//                default:()=>{}
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
            groupIndex: {
                type: Number
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
            }
        },
        components: {
            BButton, BTag
        }
    }
</script>
