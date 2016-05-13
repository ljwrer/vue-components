<template>
    <div>
        <bootstrap></bootstrap>
        <tables></tables>
        <h1>{{msg  | json 4 }}</h1>
        <!--<vue-chart-->
            <!--:chart-type="chartType"-->
            <!--:columns="columns"-->
            <!--:rows="rows"-->
            <!--:options="options"-->
        <!--&gt;</vue-chart>-->
        <echarts :option="option"></echarts>
    </div>
</template>

<script type="text/babel">
    import store from './vuex/store'
    import bootstrap from 'components/bootstrap'
    import tables from 'components/tables'
    import echarts from 'components/echarts'
    import {getMsg} from './vuex/getters'
    import * as types from './vuex/mutation-types'
    export default {
        data(){
            return {
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
            bootstrap, tables,echarts
        },
        events: {
            'click': function (msg) {
                store.dispatch(types.UPDATE_MSG,msg.value)
            }
        },
        vuex:{
            getters:{
                msg:getMsg
            }
        }
    }
</script>

<style>

</style>
