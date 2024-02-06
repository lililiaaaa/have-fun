<template>
    <div class="using_container">
        <el-switch v-model="switchValue" :before-change="openDialog" />
            <el-dialog v-model="centerDialogVisible" :title="openOrCloseTitle" width="500" append-to-body center @close="closeDialog">
                    <p style="text-align: center;">
                        为了防止误操作,
                    </p>
                    <p style="text-align: center;">请在下面的输入框中输入"<span style="color: red;">{{ openOrClose }}</span>"以确认变更机房状态</p>
                    <div class="center_input">
                        <el-input v-model="inputValue" placeholder="输入“关闭机房”以确认创建" @blur="inputChange()"/>
                    </div>
                    <div class="validate_container">
                        <div v-if="allowValidate && !inputPass">
                            <div class="red_text">校验文字输入错误，请重新输入</div>
                        </div>
                    </div>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="closeDialog">取消</el-button>
                            <el-button type="primary" @click="openNewDialog">
                            确认关闭
                            </el-button>
                        </div>
                    </template> 
            </el-dialog>
            <el-dialog v-model="lastDialog"  width="500" center append-to-body>
                <div class="last_dialog_container" style="text-align: center;">
                      <p>
                    即将关闭机房的调度启用状态
                    </p>
                    <p>
                        请再次确认受到影响的项目(iz)和游戏(biz):
                    </p>
                    <el-popover
                        placement="bottom"
                        title="Title"
                        popper-class="no-border"
                        :width="200"
                        trigger="click"
                    >
                        <template #reference>
                        <el-button class="m-2 green_text">受影响项目(biz)列表</el-button>
                        </template>
                    </el-popover>
                    <el-popover
                        placement="bottom"
                        title="Title"
                        popper-class="no-border"
                        :width="200"
                        trigger="click"  
                    >
                        <template #reference>
                        <el-button class="m-2 green_text">受影响游戏(gid)列表</el-button>
                        </template>

                    </el-popover>
                </div>
                <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="lastDialog = false">取消</el-button>
                    <el-button type="primary" @click="closeAll">确认关闭</el-button>
                </div>
                </template>
            </el-dialog>
    </div>
        
</template>

<script>
export default {
    name: 'UsingStatus',
    props:{
        visible:{
            require:true
        }
    },
    data() {
        return {
            allowValidate:false,
            switchValue:true,
            centerDialogVisible:false,
            inputValue:'',
            inputPass:false,
            lastDialog:false
        }
    },
    computed:{
        openOrClose() {
            return this.switchValue?'关闭机房':'开启机房'
        },
        openOrCloseTitle() {
            return this.switchValue?'是否确认关闭机房？':'是否确认开启机房?'
        },
        placeholderText() {
            return this.switchValue?'输入“关闭机房”以确认创建':'输入“开启机房”以确认创建'
        }
    },
    methods: {
        close() {
            
        },
        openDialog() {
            // this.switchValue=true
            //11111111111111
            this.centerDialogVisible=true
            return Promise.reject(false)
        },
        //x 和 取消按钮关闭
        closeDialog() {
            this.centerDialogVisible=false
            this.inputValue=''
            this.allowValidate=false

        },
        // 确认关闭按钮
        openNewDialog() {
            this.allowValidate=true
            if(this.inputPass) {
                this.centerDialogVisible=false
                this.lastDialog=true
            }
            
        },
        inputChange() {
            this.allowValidate=true
            if(this.switchValue) {
                if(this.inputValue==='关闭机房') {
                // 校验通过
                this.inputPass=true
            } else {
                this.inputPass=false
            }
            } else {
                if(this.inputValue==='开启机房') {
                // 校验通过
                this.inputPass=true
            } else {
                this.inputPass=false
            }
            }
            
        },
        closeAll() {
            this.lastDialog = false
            this.switchValue=!this.switchValue
        }
    }
}
</script>
<style lang="scss" scoped>
    .center_input {
        display: flex;
        justify-content: center;
        align-items: center;
        .el-input {
            width: 250px;
                .el-input_inner {
                text-align: left !important;;
            }
            
            
        }

    }
    .el-dialog {
        .validate_container {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            .red_text {
                color: red;
                text-align: center;
                font-size: 12px;
                animation: fadeIn 0.2s linear;

                @keyframes fadeIn {
                    0% {
                        opacity: 0.4;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0px);
                    }
                }
            }
        }
       
   }
   .hidden {
    visibility: hidden;
   }
   .center_word {
    text-align: center;
   }
   .last_dialog_container .el-button {
    border: none;
    background-color: #fff;
    }
</style>
<style lang="scss" >
.last_dialog_container {
    font-size: 18px;
    p {
  margin: 5px 0;
  padding: 0;
  line-height: inherit;
}
    .green_text {
        margin-top: 20px;
        color: #8ADCDC;
        font-size: 16px;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
    
</style>