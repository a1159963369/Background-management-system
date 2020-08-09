<template>
  <div class="list">
    <el-table :data="array">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name">
        <template slot-scope="scope">
          <el-input v-if="editid == scope.row.id" v-model="scope.row.name" size="mini"></el-input>
          <p v-else>{{scope.row.name}}</p>
        </template>
      </el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" v-if="editid==scope.$index+1" @click="btnBao(scope)">保存</el-button>
          <el-button size="mini" type="primary" v-else @click="btnEdit(scope)">编辑</el-button>
          <el-button size="mini" type="dafault" v-if="editid==scope.$index+1" @click="btnCanel(scope)" >取消</el-button>
          <el-button size="mini" type="danger" v-else @click="btnSave(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template> 
 <script>
 export default {
     name:'list',
     data(){
         return{
             editid:0,
             isShow:true,
             isHide:false,
             array:[
                {id:1,name:"钢铁飞龙",price:15,},
                 {id:2,name:"奥特曼",price:20,},
                {id:3,name:"钢铁侠",price:32,},
                 {id:4,name:"蝙蝠侠",price:35,},
                 {id:5,name:"蜘蛛侠",price:15,}
             ]
         }
     },
     methods:{
         btnEdit(id){
             this.editid=id.row.id
         },
         btnCanel(scope){
             this.editid=0
             Object.assign(this.$data,this.$options.data())
         },
         btnSave(scope){
             let that = this
             this.$confirm('是否删除?','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
             }).then(()=>{
                 this.$message({
                     type:'success',
                    message:'删除成功'
                 });
                 let id =scope.row.id;
                 that.array.forEach((v,i) => {
                     if(v.id ==id){
                         that.array.splice(i,1)
                     }
                 });
             }).catch(()=>{
                 this.$message({
                     type:'info',
                     message:'已取消'
                 })
             })
         },
         btnBao(scope){
             this.editid=0
         }

     }
 }
 </script>