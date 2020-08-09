<template>
<div class="home">
  <h1>Home1111111111111111111</h1>
  <it :array="dataList" @delid="getId"></it>
  <router-view></router-view>
</div>

</template>
<script>
 import item from '../mnme/liu'
export default {
  name:'home',
  components:{
    it:item
  },
  data(){
    return{
      dataList:[
        {id:1,name:"沙发"},
        {id:2,name:"椅子"},
        {id:3,name:"厨房"}
      ]
    }
  },
  methods:{
    getId(obj){
      console.log("123")
    }
  }
}
</script>