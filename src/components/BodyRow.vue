<template>
    <tr  @click="options.handle.click" :class="options.status">
        <slot></slot>
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
    import BButton from 'BButton'
    import BTag from 'BTag'
    export default{
        props:{
            rowData,options
        },
        components:{
            BButton
        }
    }
</script>
