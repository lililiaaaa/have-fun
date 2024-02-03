<template>
    <div>
    {{ saerchName }}
        <el-select :value="saerchName" multiple filterable placeholder="请选择" style="width: 160px">
            <el-option
            v-for="(item,index) in searchData"
            :key="item[a]"
            :label="item.saerchName"
            :value="idc_id">
            </el-option>
        </el-select>

    </div>  
</template>

<script>
export default {
    name: 'SearchInput',
    props:{
        searchData:{
            type:Array,
            default:[]
        },
        saerchName:{
            type:String,
            require:true,
            default:''
        }
    },
    data() {
        return {
            selectedOptions:{}
        }
    },
}
</script>