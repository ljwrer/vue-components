<template>
    <div>
        <BTable :columns="columns" tableData="readyData"></BTable>
    </div>
</template>
<style>

</style>
<script type="text/babel">
   import BTable from './BTable'
   import {readyData} from '../vuex/getters'
   import {updateReady,getDetail} from '../vuex/actions'
    export default{
        data(){
            return{
                columns:['id','name','age']
            }
        },
        store,
        computed:{
            orderOptions(){
                return {
                    body:{
                        handle:{
                            click:getDetail
                        }
                    }
                }
            }
        },
        vuex:{
            getters:{
                readyData
            },
            actions:{
                updateReady,getDetail
            }
        },
        components:{
            BTable
        }
    }
</script>
