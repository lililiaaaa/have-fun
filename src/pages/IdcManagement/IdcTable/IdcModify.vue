<template>
    <div class="idc_container">
        <div class="idc_wrap">
            {{ data.idcName }}
            <div class="edit" @click="openDialog">
                <el-icon><Edit /></el-icon>
            </div>
        </div>
        <el-dialog v-model="centerDialogVisible" title="IDC名称修改" width="250" center append-to-body>
            <el-input v-model="data.idcName" placeholder="Please input" />
        <template #footer>
          <div class="dialog_footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="saveHanlder()"> 保存</el-button>
          </div>
        </template>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'IdcModify',
    props:{
        data:{
           default:{}
        }
    },
    data() {
        return {
            centerDialogVisible:false
        }
    },
    mounted() {
        console.log(this.data);
    },
    methods:{
        openDialog() {
            this.centerDialogVisible=true

        },
        saveHanlder() {
            this.centerDialogVisible = false
            console.log('传列表数据的唯一标识给后台，调用接口保存修改')
        }
    }
}
</script>
<style lang="scss" scoped>
    .idc_container {
        .idc_wrap {
            display: flex;
            align-items: center;
            // 子元素列间距
            column-gap:4px;

            &:hover .edit {
                display: block;
            }
            .edit {
                display: none;
            }
        }
        .el-icon{
            
            display: block;
        }
    }
</style>