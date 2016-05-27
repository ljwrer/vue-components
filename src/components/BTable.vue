<template>
    <section class="">
        <div class="container">
            <table>
                <thead>
                    <tr is="header-row" :columns="columns"></tr>
                </thead>
                <tbody>
                    <tr is="body-row" v-for="data in tableData" :row-data="data" :on-row-click="onBodyRowClick" :row-index="$index"></tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
    import BodyRow from './BodyRow'
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
            }
        },
        components: {
            BodyRow, HeaderRow
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
