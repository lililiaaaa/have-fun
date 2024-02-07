<template>
    <div class="idc_container">
        <div class="idc_wrap">
            {{ data.idcName }}
            <div class="edit" @click="openDialog">
                <el-icon><Edit /></el-icon>
            </div>
        </div>
        <el-dialog v-model="centerDialogVisible" width="250" center append-to-body :show-close="false" class="edit_dialog">
            <div style="padding: 0 16px;">
            <el-input v-model="value" placeholder="Please input" />
            </div>
          <div class="edit_container">
            <!-- <el-button @click="centerDialogVisible = false" class="btn_left">取消</el-button>
            <el-button class="button_save"  type="text" @click="saveHanlder()" class=""> 保存</el-button> -->
            <p class="left" @click="centerDialogVisible = false">取消</p>
            <p class='right' @click="saveHanlder()">保存</p>
          </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'IdcModify',
    props:{
        data:{
            require:true,
            default:{},
        }
    },
    data() {
        return {
            centerDialogVisible:false,
            value: ''
        }
    },
    mounted() {
        // console.log(this.data);
    },
    methods:{
        openDialog() {
            this.centerDialogVisible=true

        },
        saveHanlder() {
            this.centerDialogVisible = false
            console.log('传列表数据的唯一标识给后台，调用接口保存修改')
        }
    },
    watch: {
        centerDialogVisible(newValue) {
            if (newValue) {
                //监听编辑框 赋值给input
                this.value = this.data.idcName
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .idc_container {
        .edit_input {
            margin: 0 10px;
        }
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
<style lang="scss">
.edit_dialog {
    padding: 16px 0 0 0;
    border-radius: 8px;
    .edit_container {
        display: flex;
        justify-content: center;
        align-items: center;
        // column-gap:80px;
        p {
            margin-top: 30px;
            padding-top: 10px;
            flex: 1;
            height: 30px;
            text-align: center;
            border-top: 1px solid #efefef;
        }
        .left {
            border-right: 1px solid #efefef;
        }
        .right {
            color: green;
        }
    }
}
    
</style>