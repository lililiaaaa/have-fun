<template>
  <div class="container">
    <header class="header">
      <p>IDC管理</p>
      <el-button type="primary" style="width: 80px" @click="dialogFormVisible = true">+ 新增</el-button>
    </header>
    <nav>
      <Search/>
    </nav>
    <main>
       <IdcTable/>
    </main>
  </div>
</template>

<script>
import Search from './Search/index.vue'
import IdcTable from './IdcTable/index.vue'

export default {
  name: 'IdcManagement',
  components:{
    Search,
    IdcTable
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
      .container {
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;

          p {
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
</style>