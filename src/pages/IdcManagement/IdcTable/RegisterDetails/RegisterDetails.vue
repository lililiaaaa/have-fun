<template>
     <el-dialog
    :model-value="visible"
    title="机房注册详情"
    width="400"
    @close="$emit('closeRegister')"
  >
  <div class="register_details">
    <div>
        <p>DB配置:</p>
        <p>Apollo:</p>
        <p>ZK:</p>
        <p>账号绑定机房配置:</p>
        <p>账号绑定实例配置:</p>
    </div>
    <div>
            <p :class="{'red_text':!registerDetailData.db}">{{ registerDetailData.db?'已配置':'非配置' }}</p>
            <p :class="{'red_text':!registerDetailData.apollo}">{{ registerDetailData.apollo?'已配置':'非配置' }}</p>
            <p :class="{'red_text':!registerDetailData.zk}">{{registerDetailData.zk?'已配置':'非配置'}}</p>
            <p :class="{'red_text':!registerDetailData.machine_status}">{{registerDetailData.machine_status?'已配置':'非配置'}}</p>
            <p :class="{'red_text':!registerDetailData.case_status}">{{registerDetailData.case_status?'已配置':'非配置'}}</p>

    </div>
  </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="$emit('closeRegister')">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
    name: 'RegisterDetails',
    props:{
        visible:{
            default:false
        },
        registerDetailData:{
            default:true
        }
    }
}
</script>

<style lang="scss" scoped>
    .register_details {
        display: flex;
        column-gap:40px;
    }
    .red_text {
        color: red;
    }
    
</style>
<style>
    .el-dialog .el-dialog__title {
        font-weight: bold;
    }
</style>