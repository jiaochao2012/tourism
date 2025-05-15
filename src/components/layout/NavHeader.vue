<template>
  <div class="nav-header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      background-color="#fff"
      text-color="#333"
      active-text-color="#409EFF"
    >
      <div class="logo-container">
        <router-link to="/">
          <span class="logo-text">马卡蒂旅游</span>
        </router-link>
      </div>

      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/attractions">景点</el-menu-item>

      <div class="nav-right">
        <el-input
          v-model="searchQuery"
          placeholder="搜索景点/酒店/美食"
          size="small"
          class="nav-search-input"
          prefix-icon="el-icon-search"
          @keyup.enter.native="handleSearch"
        >
          <el-button slot="append" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        </el-input>
        <div class="lang-switch" style="display:inline-block;margin-left:16px;">
          <el-button size="mini" @click="$i18n.locale = 'zh'" :type="$i18n.locale === 'zh' ? 'primary' : 'default'">中文</el-button>
          <el-button size="mini" @click="$i18n.locale = 'en'" :type="$i18n.locale === 'en' ? 'primary' : 'default'">English</el-button>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      activeIndex: '/',
      currentLang: 'zh',
      searchQuery: ''
    }
  },
  methods: {
    handleLangChange(lang) {
      this.$i18n.locale = lang
    },
    handleSearch() {
      // 这里可以跳转到搜索结果页或弹窗，暂时弹窗演示
      if (this.searchQuery.trim()) {
        this.$message.success(`搜索：${this.searchQuery}`)
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.activeIndex = to.path
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-header {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  
  .el-menu {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .logo-container {
    margin-right: 40px;
    
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .logo-text {
      font-size: 20px;
      font-weight: bold;
      color: #409EFF;
    }
  }

  .nav-right {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    .nav-search-input {
      min-width: 260px;
      max-width: 320px;
    }
  }
}
</style> 