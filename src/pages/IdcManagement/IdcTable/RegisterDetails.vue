<template>
     <el-dialog
    :model-value="visible"
    title="Tips"
    width="500"
    :before-close="handleClose"
    @close="$emit('closeRegister')"
  >
    <span>This is a message</span>
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
        }
    }
}
</script>