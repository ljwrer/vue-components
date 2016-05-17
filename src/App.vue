<template>
    <div>
        <bootstrap></bootstrap>
        <a v-link="{ path: '/' }">Go to main</a>
        <a v-link="{ path: '/table' }">Go to table</a>
        <router-view></router-view>
        <h1>{{msg  | json 4 }}</h1>
        <!--<vue-chart-->
            <!--:chart-type="chartType"-->
            <!--:columns="columns"-->
            <!--:rows="rows"-->
            <!--:options="options"-->
        <!--&gt;</vue-chart>-->
        <echarts :option="option"></echarts>
        <button @click="updateTable" class="btn">reload</button>
    </div>
</template>

<script type="text/babel">
    import store from './vuex/store'
    import bootstrap from 'components/bootstrap'
    import tables from 'components/tables'
    import tablex from 'components/tablex'
    import echarts from 'components/echarts'
    import {getMsg} from './vuex/getters'
    import {updateTable} from './vuex/actions'
    import * as types from './vuex/mutation-types'
    export default {
        data(){
            return {
                selected:"",
                chartType:'PieChart',
                columns: [
                    {
                    'type': 'string',
                    'label': 'Topping'
                    },
                    {
                    'type': 'number',
                    'label': 'Slices'
                    }
                ],
                rows:[
                    ['Mushrooms', 3],
                    ['Onions', 1],
                    ['Olives', 1],
                    ['Zucchini', 1],
                    ['Pepperoni', 2]
                ],
                options: {
                    'title':'How Much Pizza I Ate Last Night',
                    'width':400,
                    'height':300,
                    is3D:true
                },
                sub:['chart/bar','component/tooltip','component/title'],
                option:{
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },
        store,
        components: {
            bootstrap, tables,echarts,tablex
        },
        events: {
            'click': function (msg) {
                store.dispatch(types.UPDATE_MSG,msg.value)
            }
        },
        vuex:{
            getters:{
                msg:getMsg
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
            this.updateTable()
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
