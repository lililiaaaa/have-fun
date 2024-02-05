<template>
        <el-dialog :model-value="visible" title="Warning" width="500" center @close="close">
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
    name: 'UsingStatus',
    props:{
        visible:{
            require:true
        }
    },
    methods: {
        close() {
            this.$emit('closeUsingDialog')
        }
    }
}
</script>