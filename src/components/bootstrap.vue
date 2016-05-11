<template>
    <div>
        <tabs v-ref:tab>
            <tab header="one">
                1
            </tab>
            <tab header="two">
                2
            </tab>
            <tab header="three" disabled>
                3
            </tab>
        </tabs>
        <p @click="restore">{{index}}</p>
    </div>
</template>

<script type="text/babel">
    import {tab,tabset} from 'vue-strap'
    export default {
        components: {
            tabs:tabset,tab
        },
        data() {

        },
        methods:{
          restore(){
              this.index=0
          }
        },
        computed: {
            index:{
                get(){
                    return (this.$refs.tab.activeIndex);
                },
                set(val){
                    this.$refs.tab.activeIndex=val
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
