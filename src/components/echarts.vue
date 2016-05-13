<template>
    <div class="chart"></div>
</template>
<style>
    .chart{
        width: 500px;
        height:500px;
    }
</style>
<script>
    import echarts from 'echarts'
    export default{
        data(){
          return {
              chart:null
          }
        },
        props: {
            option: {
                type: Object,
                required: true
            }
        },
        ready(){
            const _this=this;
            this.chart = echarts.init(this.$el);
            this.chart.setOption(this.option);
            const events=["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "globalout", "legendselectchanged", "legendselected", "legendunselected", "datazoom", "datarangeselected", "timelinechanged", "timelineplaychanged", "restore", "dataviewchanged", "magictypechanged", "pieselectchanged", "pieselected", "pieunselected", "mapselectchanged", "mapselected", "mapunselected", "axisareaselected"];
            events.forEach(function (ev) {
                _this.chart.on(ev,function (event) {
                    console.log(ev)
                    _this.$dispatch(ev,event);
                })
            })
        },
        beforeDestroy(){
            this.chart&&this.chart.dispose
        }
    }
</script>
