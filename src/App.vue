<template>
    <div>
        <ready-table :columns="column" :table-data="readyData" ></ready-table>
        <order-table :columns="column" :table-data="orderData"></order-table>
        <!--<scroll-table :columns="column" :table-data="tableData"></scroll-table>-->
        <!--<scroll-table :columns="column" :table-data="tableData"></scroll-table>-->

    </div>
</template>

<script type="text/babel">
    import ReadyTable from './components/ReadyTable'
    import OrderTable from './components/OrderTable'
    import store from './vuex/store'
    import * as types from './vuex/mutation-types'
    import  {readyData,orderData} from './vuex/getters'
    import {updateReady} from './vuex/actions'
    import bus from './bus'
    export default {
        data(){
            return {}
        },
        store,
        components: {
            ReadyTable,OrderTable
        },
        events: {},
        computed: {
            column(){
                return this.readyData[0]?Object.keys(this.readyData[0]):[]
            }
        },
        methods:{

        },
        vuex: {
            getters: {
                readyData
            },
            actions: {
                updateReady
            }
        },
        route: {
            data(){
                console.log("data")
            },
            activate(){
                console.log("activate")
            },
            deactivate(){
                console.log("deactivate")

            },
            canActivate(){
                console.log("canActivate")

            },
            canDeactivate(){
                console.log("canDeactivate")

            },
            canReuse(){
                console.log("canReuse")

            },
        },
        init(){
            console.log("init")

        },
        created(){
            console.log("created")
        },
        beforeCompile(){
            console.log("beforeCompile")

        },
        compiled(){
            console.log("compiled")

        },
        ready(){
            console.log("ready")
            this.updateReady();
        },
        attached(){
            console.log("attached")

        },
        detached(){
            console.log("detached")

        },
        beforeDestroy(){
            console.log("beforeDestroy")

        },
        destroyed(){
            console.log("destroyed")

        },
    }
</script>

<style>

</style>
