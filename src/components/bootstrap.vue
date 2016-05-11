<template>
    <div>
        <tabs v-ref:tab>
            <tab header="one">0</tab>
            <tab header="two">1</tab>
            <tab header="three">2</tab>
        </tabs>
        <button @click="move" type="button" class="btn btn-default">{{index}}</button>
    </div>
</template>

<script type="text/babel">
    import {tab, tabset} from 'vue-strap'
    export default {
        components: {
            tabs: tabset, tab
        },
        methods: {
            move:(function () {
                let direction = -1;
                return function () {
                    if (this.index === this.$refs.tab.$children.length-1 || this.index === 0) {
                        direction=-direction
                    }
                    this.index += direction
                }
            })()
        },
        computed: {
            index: {
                get(){
                    return (this.$refs.tab.activeIndex);
                },
                set(index){
                    this.$refs.tab.activeIndex = index
                }
            }
        },
        ready(){
//            console.log(this.$refs.tab.activeIndex)
//            this.$set('index', this.$refs.tab.activeIndex)

        },
        compiled(){
//            console.log(this.$refs.tab.activeIndex);
//            this.$set('index', this.$refs.tab.activeIndex)
        }
    }
</script>

<style scoped lang="sass">
    @import "~css/bootstrap.css";
    @import "~css/bootstrap-theme.css";


</style>
    <template>
        <div>
            <tabs v-ref:tab>
                <tab header="one">0</tab>
                <tab header="two">1</tab>
                <tab header="three">2</tab>
            </tabs>
            <button @click="move" type="button" class="btn btn-default">{{index}}</button>
        </div>
    </template>
