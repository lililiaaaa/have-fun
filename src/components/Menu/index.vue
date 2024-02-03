<template>
  <el-menu
    :default-active="defaultActive"
    mode="vertical"
    background-color="rgb(39, 49, 61)"
    text-color="#fff"
    active-text-color="#fff"
    class="menu-container"
    router
  >
    <el-menu-item v-for="{ path, name } in menuList" :index="path" :key="path">
      <el-icon><Folder /></el-icon>
      <span>{{ name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import routerOptions from '@/router'

export default {
  name: 'Menu',
  data() {
    return {
      menuList: routerOptions.routes.slice(1)
    }
  },
  computed: {
    defaultActive() {
      return this.$route.path || this.menuList[1].path
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;

  .is-active {
    background: #19baba;
  }
}
</style>
