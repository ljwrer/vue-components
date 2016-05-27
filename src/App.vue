<template>
    <div>
        <b-table :columns="columns" :table-data="readyData" :on-body-row-click="getDetail"></b-table>
        <b-group-table :columns="columns" :table-data="orderData"></b-group-table>
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
    import {updateReady,getDetail} from './vuex/actions'
    export default {
        mixins:[lifeCycle],
        data(){
            return {
                list:{
                    name:"Ray",
                    age:18
                },
                groupList:[
                    {
                        data:[
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            }
                        ]
                    },
                    {
                        data:[
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            }
                        ]
                    },
                    {
                        data:[
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            },
                            {
                                name:"Ray",
                                age:18
                            }
                        ]
                    }
                ],
                columns:['id','name','age']
            }
        },
        store,
        components: {
            BTable,BGroupTable
        },
        computed:{

        },
        vuex: {
            getters: {
               readyData,orderData,pickerData,allPickedAge
            },
            actions: {
                updateReady,getDetail
            }
        },
        ready(){
            this.updateReady();
        }
    }
</script>

<style>

</style>
