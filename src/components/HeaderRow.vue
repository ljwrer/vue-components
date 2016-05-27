<template>
    <tr class="header">
        <th v-if="hasBefore"><div></div></th>
        <th v-if="checkbox"><input type="checkbox" :checked="checked" @change="onCheck(checked)"></th>
        <th v-for="column in columns">
            {{column}}
            <div>{{column}}</div>
        </th>
        <th v-if="operate">{{operateText}}</th>
    </tr>
</template>
<style>
    th {
        border-bottom:1px solid #eee;
        background: #ddd;
        color: #000;
        padding: 10px 25px;
    }
    th {
        height: 0;
        line-height: 0;
        padding-top: 0;
        padding-bottom: 0;
        color: transparent;
        border: none;
        white-space: nowrap;
    }
    th div{
        position: absolute;
        background: transparent;
        color: #fff;
        padding: 9px 25px;
        top: 0;
        margin-left: -25px;
        line-height: normal;
        border-left: 1px solid #800;
    }
    th:first-child div{
        border: none;
    }
</style>
<script>
    export default{
       props:{
           columns:{
               type:[Array,Object],
               default(){
                   return []
               }
           },
           checkbox:{
               type:Boolean,
               default:false
           },
           onCheck:{
               type:Function,
               default(){}
           },
           checked:{
               type:Boolean,
               default:false
           },
           operate:{
               type:Boolean,
               default:false
           },
           operateText:{
               type:String,
               default:''
           },
           hasBefore:{
               type:Boolean,
               default:false
           }
       }
    }
</script>
