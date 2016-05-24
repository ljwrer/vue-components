<template>
    <tr class="header">
        <th v-if="options.checkbox"><input type="checkbox" @change="options.handle.check"></th>
        <th v-for="column in columns">
            {{column}}
            <div>{{column}}</div>
        </th>
        <th v-if="options.operate">{{options.operate.text}}</th>
    </tr>
</template>
<style></style>
<script>
    export default{
       props:{
           columns,options
       }
    }
</script>
