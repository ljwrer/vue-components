<template>
    <div>{{data | json 4}}</div>
</template>
<style>

</style>
<script>
    import {getTableData} from '../vuex/getters'
    import {updateTable} from '../vuex/actions'
    export default{
        vuex:{
            getters:{
                data:getTableData
            },
            actions:{
                updateTable
            }
        },
        ready(){
            this.updateTable()
        }
    }
</script>
