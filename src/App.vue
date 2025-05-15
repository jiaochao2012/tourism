<template>
  <div id="app">
    <!-- <div class="lang-switch">
      <el-button @click="changeLang('zh')">中文</el-button>
      <el-button @click="changeLang('en')">English</el-button>
    </div> -->
    <!-- <nav-header></nav-header> -->
    <router-view></router-view>
    <CommonFooter />
  </div>
</template>

<script>
// import NavHeader from './components/layout/NavHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  name: 'App',
  components: {
    // NavHeader,
    CommonFooter
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; 删除顶部多余空白 */
}

body {
  margin: 0;
  padding: 0;
}

/* .lang-switch {
  margin-bottom: 20px;
} */
</style>
