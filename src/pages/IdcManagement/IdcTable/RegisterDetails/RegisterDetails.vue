<template>
     <el-dialog
    :model-value="visible"
    title="机房注册详情"
    width="400"
    @close="$emit('closeRegister')"
  >
  <div class="register_details">
    <!-- <div>
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

    </div> -->
    <div v-for="{ label, className, value } in detailList">
      {{ label }}：<span :class="className">{{ value }}</span>
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
    },
    computed: {
      detailList() {
        const { db, apollo, zk, machine_status, case_status } = this.registerDetailData
        const text_configured = '已配置'
        const text_unconfigured = '未配置'
        const red_class_name = 'red_text'
        const list = [
          { label: 'DB配置', value: db ? text_configured : text_unconfigured, className: db ? red_class_name : '' },
          { label: 'Apollo', value: apollo ? text_configured : text_unconfigured, className: apollo ? red_class_name : '' },
          { label: 'ZK', value: zk ? text_configured : text_unconfigured, className: zk ? red_class_name : '' },
          { label: '账号绑定机房配置', value: machine_status ? text_configured : text_unconfigured, className: machine_status ? red_class_name : '' },
          { label: '账号绑定实例配置', value: case_status ? text_configured : text_unconfigured, className: case_status ? red_class_name : '' },
        ]
        return list
      }
    }
}
</script>

<style lang="scss" scoped>
    .register_details {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        row-gap: 12px;
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