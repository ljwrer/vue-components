<template>
    <tr  @click="options.handle.click" :class="options.status">
        <!--<template v-if="1">-->
            <!--<slot></slot>-->
        <!--</template>-->
        <td v-if="before">
            <slot></slot>
        </td>
        <td v-if="options.checkBox">
            <input type="checkbox" @change="options.handle.check">
        </td>
        <td v-for="row in rowData">{{row}}</td>
        <td v-if="options.status">
            <b-tag type="options.status.type">{{options.status.text}}</b-tag>
        </td>
        <td v-for="operate in options.operate">
            <b-button on-click="operate.handle">{{operate.text}}</b-button>
        </td>
    </tr>
</template>
<style>

</style>
<script>
    import BButton from './BButton'
    import BTag from './BTag'
    export default{
        props:{
            before:null,
            rowData:null,
            options:null
        },
        components:{
            BButton,BTag
        },
        ready(){
            console.log(1)
        }
    }
</script>
