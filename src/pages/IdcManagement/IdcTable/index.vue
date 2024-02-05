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
            <p v-if="row.registerStatus===0" style="color: red;">未成功注册,<span style="color: blue;" @click="registerDetailsHanler(row)">查看详情</span></p>
            <p v-if="row.registerStatus===2" style="color: green;">注册中,<span style="color: blue;" @click="registerDetailsHanler(row)">查看详情</span></p>
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
        <template v-slot="{row}">
            <el-switch v-model="row.usingStatus" @click="openUsingDialog(row)" />
        </template>
    </el-table-column>
    <el-table-column
        prop="server"
        label="接入服务器">
    </el-table-column>
    <el-table-column
        prop="example"
        label="实例">
    </el-table-column>
    <el-table-column
        prop="affectProjects"
        label="影响项目">
        <template v-slot="{row}">
            <span style="color: blue;" @click="openAffectProjectModel(row,'biz')">查看详情</span>
        </template>
    </el-table-column>
    <el-table-column
        prop="affectGames"
        label="影响游戏">
        <template v-slot="{row}">
            <span style="color: blue;" @click="openAffectProjectModel(row,'gid')">查看详情</span>
        </template>
    </el-table-column>
  </el-table>
  <RegisterDetails :visible="registerDetails" :registerDetailData="registerDetailData" @closeRegister="registerDetails=false"></RegisterDetails>
  <AffectModel :type="typeValue" :visible="affectProject" @closeAffectProModel="affectProject=false" :data="currentProData"></AffectModel>
  <UsingStatus :visible="usingStatus" @closeUsingDialog="usingStatus=false" ></UsingStatus>
    </div>
</template>

<script>
import IdcModify from './IdcModify/IdcModify.vue';
import RegisterDetails from './RegisterDetails/RegisterDetails.vue';
import AffectModel from './AffectModel/AffectModel.vue';
import UsingStatus from './UsingStatus/UsingStatus.vue';
export default {
    name: 'IdcTable',
    components:{
        IdcModify,
        RegisterDetails,
        AffectModel,
        UsingStatus
    },
    data() {
        return {
          //查看详情数据
        //   registerDetailsData:{
        //     db:true,
        //     apollo:true,
        //     zk:false,
        //     machine_status:true,
        //     case_status:true
        //   },
          typeValue:'biz',
          affectProject:false,
          usingStatus:false,
          currentProData:[],
          currentGameData:[],
          registerDetailData: {},
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
            usingStatus:true,
            server:'11',
            example:'实例22',
            // 查看详情
            db:true,
            apollo:true,
            zk:false,
            machine_status:true,
            case_status:true,
            //影响项目
            affectProject:[{
                name:'快手',
                status:true
            },
            {
                name:'网易',
                status:false
            },
            {
                name:'逆水寒',
                status:true
            }]
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
            usingStatus:false,
            server:'11',
            example:'实例22',
            db:true,
            apollo:true,
            zk:false,
            machine_status:false,
            case_status:true,
            //影响项目
            affectProject:[{
                name:'快手',
                status:true
            },
            {
                name:'方方',
                status:false
            },
            {
                name:'逆水寒',
                status:true
            }],
            affectGame:[{
                name:'游戏',
                status:true
            },
            {
                name:'方方',
                status:false
            },
            {
                name:'逆水寒',
                status:true
            }]
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
            usingStatus:false,
            server:'11',
            example:'实例22',
            db:true,
            apollo:true,
            zk:false,
            machine_status:true,
            case_status:false,
            //影响项目
            affectProject:[{
                name:'快手222',
                status:true
            },
            {
                name:'哈哈',
                status:true
            },
            {
                name:'喜喜',
                status:true
            }]
          }],
          multipleSelection: [],
          //affectModel
          afffectProjectModel:false,
          afffectGameModel:false
        }
      },
      mounted() {
        console.log(11)
      },
      methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //查看详情组件
        registerDetailsHanler(row) {
            console.log(row);
            this.registerDetails=true
            this.registerDetailData = row

        },
        //影响项目
        // openAffectProjectModel(row,type) {
        //     this.affectProject=true
        //     this.currentProData=row

        // },
        //影响游戏
        openAffectProjectModel(row,type) {
            this.typeValue=type
            this.affectProject=true
            this.currentProData=row
            console.log(row)
        },
        openUsingDialog(row) {
            this.usingStatus=true
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