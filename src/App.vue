<template>
    <div>
        <b-table
            :columns="columns"
            :table-data="readyData"
            :on-body-row-click="getDetail">
        </b-table>
        <b-group-table
            :columns="columns"
            :table-data="orderData"
            :on-check-all="toggleOrder"
            :has-before="true">
        </b-group-table>
        <b-group-table
            :columns="columns"
            :table-data="pickerData"
            :has-before="false"
            :has-check-box="false"
            :operates="operates"
            :operate="true"
            operate-text="操作">
        </b-group-table>
    </div>
    <!--<table>-->
        <!--<tbody v-for="group in groupList">-->
            <!--<tr is="body-row-group" v-for="data in group.data" :row-data="data" :index="$index" :length="group.data.length"></tr>-->
        <!--</tbody>-->
    <!--</table>-->
</template>

<script type="text/babel">
    import BTable from './components/BTable'
    import BGroupTable from './components/BGroupTable'
    import lifeCycle from './mixin/lifeCycle'
    import store from './vuex/store'
    import * as types from './vuex/mutation-types'
    import  {readyData,orderData,pickerData,allPickedAge} from './vuex/getters'
    import {updateReady,getDetail,toggleOrder,deletePicker} from './vuex/actions'
    export default {
        mixins:[lifeCycle],
        data(){
            return {
                columns:['id','name','age']
            }
        },
        store,
        components: {
            BTable,BGroupTable
        },
        computed:{
            operates(){
                return [
                    {
                        text:"删除",
                        handle:this.deletePicker
                    }
                ]
            }
        },
        vuex: {
            getters: {
               readyData,orderData,pickerData,allPickedAge
            },
            actions: {
                updateReady,getDetail,toggleOrder,deletePicker
            }
        },
        ready(){
            this.updateReady();
        }
    }
</script>

<style>

</style>
