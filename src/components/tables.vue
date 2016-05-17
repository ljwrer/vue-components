<template>
    <div class="people">
        <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
        <button @click="add">add</button>
        <button @click="updateTable" class="btn">reload</button>
    </div>
</template>
<style>

</style>
<script>
    import {getTableData} from '../vuex/getters'
    import {updateTable} from '../vuex/actions'
    export default{
        data(){
            return {
                columns:['id','name','age',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            }
        },
        methods:{
            add(){
                this.columns.push("gender");
            }
        },
        computed:{
//            columns(){
//                return this.tableData[0]?Object.keys(this.tableData[0]):[];
//            }
        },
        vuex:{
            getters:{
                tableData:getTableData
            },
            actions:{
                updateTable
            }
        },
        route:{
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
