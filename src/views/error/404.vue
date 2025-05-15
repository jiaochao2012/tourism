<template>
  <div class="error-page">
    <div class="error-content">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您访问的页面不存在或已被移除。</p>
      <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.error-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  .error-content {
    text-align: center;
    padding: 40px;

    h1 {
      font-size: 120px;
      color: #409EFF;
      margin: 0;
      line-height: 1;
    }

    h2 {
      font-size: 30px;
      color: #333;
      margin: 20px 0;
    }

    p {
      color: #666;
      margin-bottom: 30px;
    }
  }
}
</style> 