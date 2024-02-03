<template>
    <div class="input_container">
        <div v-for="(item,index) in inputData" :key="item.id" >
            <el-input v-if="item.type==='input'" v-model="item.value" :placeholder="item.placeholder" style="width: 120px;"></el-input>

            <el-select v-if="item.type==='select'" v-model="item.value" multiple filterable :placeholder="item.placeholder" style="width: 180px;margin: 0 5px;">
                <el-option
                    v-for="(item1,index) in item.list"
                    :key="item1[item.a]"
                    :label="item1[item.b]"
                    :value="item1[item.a]"
                >
                </el-option>
            </el-select>
            <el-select v-if="item.type==='single'" v-model="item.value"  filterable :placeholder="item.placeholder">
                <el-option
                    v-for="(item1,index) in item.list"
                    :key="item1[item.a]"
                    :label="item1[item.b]"
                    :value="item1[item.a]"
                >
                </el-option>
            </el-select>
        </div>
        <div style="margin-left: 5px;">
            <el-button type="primary" @click="resetHandler">重置</el-button>
            <el-button type="primary" @click="submitHandler">搜索</el-button>
        </div>
        
    </div>
    
</template>
<script>
import SearchInput from './SearchInput.vue';
export default {
    name: 'Search',
    components:{
        SearchInput
    },
    data() {
        return {
            idcId:'',
            edgeId:[],
            zoneId:[],
            province:[],
            registerStatus:[],
            operationStage:[],
            usingStatus:undefined,
            searchData:[{
                id:1,
                idc_id:4031,
                idc_name:'机房1',
                edge:4031,
                zone:4030,
                province:'广东',
                register_status:1,
                operation_stage:1,
                using_status:2,
            },{
                id:2,
                idc_id:4032,
                idc_name:'机房2',
                edge:4032,
                zone:4030,
                province:'北京',
                register_status:1,
                operation_stage:1,
                using_status:2,
            },{
                id:3,
                idc_id:4033,
                idc_name:'机房3',
                edge:4031,
                zone:4030,
                province:'上海',
                register_status:1,
                operation_stage:1,
                using_status:2,
            }],
            inputData:[
                {
                    placeholder:'搜索IDC_ID',
                    type:'input',
                    value:this.idcId,
                },
                {
                    placeholder:'输入Edge',
                    type:'select',
                    value:this.edgeId,
                    multiple:true,
                    list:[
                        { edgeId: 4031, edgeName: '4031区域' },
                        { edgeId: 4032, edgeName: '4032区域' },
                    ],
                    a:'edgeId',
                    b:'edgeName'
                },
                {
                    placeholder:'输入Zone',
                    type:'select',
                    value:this.zoneId,
                    multiple:true,
                    list:[
                        { zoneId: 4031, zoneName: '4031222222区域' },
                        { zoneId: 4032, zoneName: '4032222222222222区域' },
                    ],
                    a:'zoneId',
                    b:'zoneName'  
                },
                {
                    placeholder:'请输入省份',
                    type:'select',
                    value:this.province,
                    multiple:true,
                    list:[
                        { provinceId: 4031, provinceName: '上海' },
                        { provinceId: 4032, provinceName: '北京' },
                    ],
                    a:'provinceId',
                    b:'provinceName'  
                },
                {
                    placeholder:'请输入注册状态',
                    type:'select',
                    value:this.registerStatus,
                    multiple:true,
                    list:[
                        { registerID: 4031, registerName: '已注册' },
                        { registerID: 4032, registerName: '未成功注册' },
                        { registerID: 4033, registerName: '注册中' },
                    ],
                    a:'registerID',
                    b:'registerName'  
                },
                {
                    placeholder:'请输入运营阶段',
                    type:'select',
                    value:this.usingStatus,
                    multiple:true,
                    list:[
                        { statusId: 1, statusName: '已启用' },
                        { statusId: 2, statusName: '未上线' },
                        { statusId: 3, statusName: '测试中' },
                    ],
                    a:'statusId',
                    b:'statusName'  
                },
                {
                    placeholder:'请输入启用状态',
                    type:'single',
                    value:this.usingStatus,
                    multiple:true,
                    list:[
                        { statusId: 1, statusName: '已启用' },
                        { statusId: 0, statusName: '已关闭' },
                    ],
                    a:'statusId',
                    b:'statusName'  
                },
            ]    
        }
    },
    methods:{
        resetHandler() {
            console.log(11);
           this.inputData.forEach(item=>item.value='')
        },
        submitHandler() {
            //整理好后端所需字段 调用接口 
            console/log('调用搜索接口')
        },
        saerchNameHandler(index) {
            const obj={
                0:'idc_id',
                1:'edge',
                2:'zone',
                3:'province'
            }
            return obj[index]
        }
    }
}
</script>
<style lang="scss" >
    .input_container {
        display: flex;
    }
</style>