<template>
    <table>
        <tr is="body-row" :row-data="list"></tr>
        <tr is="template" v-for="group in groupList" >
            <td is="body-row-group" v-for="data in group.data" :row-data="data" :index="$index" :length="group.data.length"></td>
        </tr>
    </table>
</template>

<script type="text/babel">
    import BodyRow from './components/BodyRow'
    import BodyRowGroup from './components/BodyRowGroup'
    import lifeCycle from './mixin/lifeCycle'
//    import store from './vuex/store'
//    import * as types from './vuex/mutation-types'
//    import  {readyData,orderData,pickerData,allPickedAge} from './vuex/getters'
//    import {updateReady} from './vuex/actions'
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
                ]
            }
        },
//        store,
        components: {
            BodyRow,BodyRowGroup
        },
        vuex: {
//            getters: {
//               readyData,orderData,pickerData,allPickedAge
//            },
//            actions: {
//                updateReady
//            }
        },
        ready(){
//            this.updateReady();
        }
    }
</script>

<style>

</style>
