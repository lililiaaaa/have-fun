<template>
    <div>           
    <el-dialog :model-value="visible" :title="title"  width="350" @close="closeDialog()">
        <el-table :data="tableData" border>
        <el-table-column :prop="propertyName" :label="labelName" width="150" />
        <el-table-column prop="status" label="调度启用状态"  width="200" />
        </el-table>
        <el-button type="primary" @click="closeDialog()" style="margin:20px 120px 0 ;">
            关闭
        </el-button>
    </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'AffectModel',
    props:{
        visible:{
            require:true
        },
        type:{
            require:true
        },
        data:{
            require:true
        },
    
    },
    computed: {
        title() {
           return this.type==='biz' ? '影响项目(biz)':'影响游戏(gid)'
        },
        
        labelName() {
           return this.type==='biz' ? '项目(biz)':'游戏(gid)'
        },
        tableData() {
            return this.type==='biz' ? this.data.affectProject:this.data.affectGame
        },
        propertyName() {
            return this.type==='biz' ?'projectName':'gameName'
        }
       
    },
    methods:{
        closeDialog() {
            this.$emit('closeAffectProject')
        }  
    }
}
</script> 