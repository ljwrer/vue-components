<template>
    <div>
        <ready-table :columns="readyColumn" :table-data="readyData" ></ready-table>
        <order-table v-if="orderData.length" :columns="orderColumn" :table-data="orderData"></order-table>
        <picker-table v-if="pickerData.length" :columns="pickerColumn" :table-data="pickerData"></picker-table>
    </div>
</template>

<script type="text/babel">
    import ReadyTable from './components/ReadyTable'
    import OrderTable from './components/OrderTable'
    import PickerTable from './components/PickerTable'
    import store from './vuex/store'
    import * as types from './vuex/mutation-types'
    import  {readyData,orderData,pickerData} from './vuex/getters'
    import {updateReady} from './vuex/actions'
    import bus from './bus'
    export default {
        data(){
            return {}
        },
        store,
        components: {
            ReadyTable,OrderTable,PickerTable
        },
        events: {},
        computed: {
            readyColumn(){
                return this.getColumn(this.readyData)
            },
            orderColumn(){
                return this.getColumn(this.orderData&&this.orderData[0]?this.orderData[0].data:null)
            },
            pickerColumn(){
                return this.getColumn(this.pickerData&&this.pickerData[0]?this.pickerData[0].data:null)
            }
        },
        methods:{
            getColumn(data){
                return data&&data[0]?Object.keys(data[0]):[]
            }
        },
        vuex: {
            getters: {
               readyData,orderData,pickerData
            },
            actions: {
                updateReady
            }
        },
        ready(){
            this.updateReady();
        }
    }
</script>

<style>

</style>
