<template>
    <section class="">
        <div class="container">
            <table>
                <thead>
                <tr class="header">
                    <th><div><input type="checkbox"></div></th>
                    <th v-for="column in columns">
                        {{column}}
                        <div>{{column}}</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in tableData" @click="pickHandler(data.id)">
                    <td><input type="checkbox"></td>
                    <td v-for="item in data">{{item}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<style scoped>
    html, body{
        margin:0;
        padding:0;
        height:100%;
    }
    section {
        position: relative;
        border: 1px solid #000;
        padding-top: 37px;
        background: #500;
    }
    section.positioned {
        position: absolute;
        top:100px;
        left:100px;
        width:800px;
        box-shadow: 0 0 15px #333;
    }
    .container {
        overflow-y: auto;
        height: 200px;
    }
    table {
        border-spacing: 0;
        width:100%;
    }
    td + td {
        border-left:1px solid #eee;
    }
    td, th {
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
    import bus from '../bus'
    export default{
        props:{
            columns:{
                type:Array,
                require:true
            },
            tableData:{
                type:Array,
                require:true
            },
            pickHandler:{
                type:Function,
                default:function () {}
            }
        },
        methods:{
//            pick(data){
//                bus.$emit('table-row-pick',data);
//            }
        }
    }
</script>
