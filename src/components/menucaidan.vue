<template>
    <el-menu-item id="menucaidan">
        <slot></slot>
        <span slot="title">{{title}}</span>
    </el-menu-item>                             
</template>

<script>
export default {
    name:'menucaidan',
    props:["ide","title"],
    data(){
        return{
            
        }
    }
}
</script>