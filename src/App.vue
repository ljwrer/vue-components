<template>
    <div>
        <bootstrap></bootstrap>
        <tables></tables>
        <p>{{msg}}</p>
    </div>
</template>

<script type="text/babel">
    import store from './vuex/store'
    import bootstrap from 'components/bootstrap'
    import tables from 'components/tables'
    import {getMsg} from './vuex/actions'
    export default {
        store,
        components: {
            bootstrap, tables
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
