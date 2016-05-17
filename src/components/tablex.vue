<template>
    <vuetable
        api-url="http://localhost:3000/api/table"
        :fields="columns"
    ></vuetable>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {
                columns:['id','name','age']
            }
        },
        components:{

        }
//        vuex:{
//            getters:{
//                tableData:getTableData
//            },
//            actions:{
//                updateTable
//            }
//        },
//        ready(){
//            this.updateTable()
//        }
    }
</script>
