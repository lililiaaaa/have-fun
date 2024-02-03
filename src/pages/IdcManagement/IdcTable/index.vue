<template>
    <div class="table_container">
        <el-table
        ref="multipleTable"
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
        prop="idc"
        label="IDC"
        width="100">
    </el-table-column>
    <el-table-column
        prop="idcName"
        label="IDC名称"
        width="120">
        <template v-slot="{ row }">
            <IdcModify :data="row"></IdcModify>
        </template>
    </el-table-column>
    <el-table-column
        prop="edge"
        label="所需Edge">
    </el-table-column>
    <el-table-column
        prop="zone"
        label="所需zone">
    </el-table-column>
    <el-table-column
        prop="province"
        label="省份">
    </el-table-column>
    <el-table-column
        prop="registerStatus"
        label="注册状态"
        width="130">
        <template v-slot="{ row }">
            <p v-if="row.registerStatus===1">已注册</p>
            <p v-if="row.registerStatus===0" style="color: red;">未成功注册,<span style="color: blue;" @click="registerDetailsHanler()">查看详情</span></p>
            <p v-if="row.registerStatus===2" style="color: green;">注册中,<span style="color: blue;">查看详情</span></p>
        </template>
    </el-table-column>
    <el-table-column
        prop="remarks"
        label="调度参考信息">
    </el-table-column>
    <el-table-column
        prop="addTime"
        label="添加时间">
    </el-table-column>
    <el-table-column
        prop="updateTime"
        label="更新时间">
    </el-table-column>
    <el-table-column
        prop="operation"
        label="运营阶段">
    </el-table-column>
    <el-table-column
        prop="usingStatus"
        label="调度启用状态">
    </el-table-column>
    <el-table-column
        prop="server"
        label="接入服务器">
    </el-table-column>
    <el-table-column
        prop="example"
        label="实例">
    </el-table-column>
  </el-table>
  <RegisterDetails :visible="registerDetails" @closeRegister="registerDetails=false"></RegisterDetails>
    </div>
</template>

<script>
import IdcModify from './IdcModify.vue';
import RegisterDetails from './RegisterDetails.vue';
export default {
    name: 'IdcTable',
    components:{
        IdcModify,
        RegisterDetails
    },
    data() {
        return {
          registerDetails:false,
          tableData: [{
            idc: '4031',
            idcName: 'xxx机房',
            edge: '4031',
            zone:'1',
            province:'广东',
            registerStatus:1,
            remarks:'',
            addTime:'2022.12.32',
            updateTime:'2022.12.32',
            //运营阶段
            operation:1,
            usingStatus:1,
            server:'11',
            example:'实例22',
          }, {
            idc: '4032',
            idcName: 'xxx机房',
            edge: '4032',
            zone:'1',
            province:'广东',
            registerStatus:0,
            remarks:'',
            addTime:'2022.12.32',
            updateTime:'2022.12.32',
            //y运营阶段
            operation:1,
            usingStatus:1,
            server:'11',
            example:'实例22',
          },{
            idc: '4032',
            idcName: 'xxx机房',
            edge: '4032',
            zone:'1',
            province:'广东',
            registerStatus:2,
            remarks:'',
            addTime:'2022.12.32',
            updateTime:'2022.12.32',
            //y运营阶段
            operation:1,
            usingStatus:1,
            server:'11',
            example:'实例22',
          }],
          multipleSelection: []
        }
      },
      methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        registerDetailsHanler() {
            this.registerDetails=true
        }
      }
}
</script>
<style lang="scss" scoped>
    .table_container {
        padding-top: 25px
    }
    .el-button + .el-button {
        margin-left: 8px;
        border: 0;
    }
</style>