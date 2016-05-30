<template>
    <button @click="onClick.apply(null,args)"><slot></slot></button>
</template>
<script type="text/babel">
    export default{
        props:{
            onClick:{
                default:()=>{}
            },
            args:{
                type:null
            }
        }
    }
</script>
