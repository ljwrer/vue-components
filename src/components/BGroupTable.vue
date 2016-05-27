<template>
    <section class="">
        <div class="container">
            <table>
                <thead>
                <tr is="header-row" :columns="columns" :has-before="true"></tr>
                </thead>
                <tbody v-for="group in tableData" :groupIndex="$index">
                    <tr is="body-row-group" v-for="data in group.data"  :row-data="data" :on-row-click="onBodyRowClick" :on-check-all="onCheckAll" :row-index="$index" :group-index="groupIndex"  :row-span="group.data.length">

                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
    import BodyRowGroup from './BodyRowGroup'
    import HeaderRow from './HeaderRow'
    export default{
        props: {
            columns: {
                type: Array,
                default(){
                    return []
                }
            },
            tableData: {
                type: Array,
                default(){
                    return []
                }
            },
            onBodyRowClick: {
                type: Function,
                default(){
                }
            },
            checked:{
                type:Boolean,
                default:false
            },
            onCheckAll:{
                type:Function,
                default(){}
            }
        },
        components: {
            BodyRowGroup, HeaderRow
        }
    }
</script>
<style>
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
</style>
