<template>
    <div>
  <el-dialog :model-value="visible" :title="title"  width="350" @close="closeDialog()">
    <el-table :data="data.affectProject" border>
      <el-table-column property="name" :label="projectName" width="150" />
      <el-table-column property="status" label="调度启用状态"  width="200" />
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
        type: {
            default: 'biz'
        },
        visible:{
            require:true,
        },
        projectName:{
            require:true
        },
        status:{
            require:true
        },
        data:{
            require:true
        }
    },
    data() {
        return {
          gridData: [{
          projectName: '逆水寒',
          status: 1,
        }, {
          projectName: '网易',
          status: 0,
        }, {
          projectName: '网易',
          status: 1,
        }, {
          projectName: '快手',
          status: 0,
        }],
        }
    },
    computed: {
        title() {
            return this.type === 'biz' ? '影响项目(biz)' : '影响游戏(gid)'
        },
        projectName() {
            return this.type === 'biz' ? '项目(biz)' : '游戏(gid)'
        },
        // status() {
        //     return this.type === 'biz' ? '项目(biz)' : '游戏(gid)'
        // }
    },
    mounted() {
        console.log(this.data)
    },
    methods:{
        closeDialog() {
            if(this.type==='biz') {
                this.$emit('closeAffectProModel')
            }else {
                this.$emit('closeAffectGameModel')
            }
        }
    }
}
</script> 