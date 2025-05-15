<template>
  <div class="strategy-list-page">
    <!-- <NavHeader /> -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>景点攻略</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-title">
      <span class="highlight">爱尔兰旅游</span> 景点攻略
    </div>
    <div class="strategy-list">
      <router-link
        v-for="item in strategies"
        :key="item.id"
        :to="`/strategies/${item.id}`"
        class="strategy-card-link"
        style="text-decoration: none; color: inherit;"
      >
        <div class="strategy-card">
          <img :src="item.image" class="strategy-img" :alt="item.name" />
          <div class="strategy-content">
            <div class="strategy-title">{{ item.name }}景点点评</div>
            <div class="strategy-desc">{{ item.desc }}</div>
            <div class="strategy-rating">
              <span class="stars">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= item.rating }">★</span>
              </span>
              <span class="score">{{ item.rating }}星</span>
            </div>
            <div class="comments-list">
              <div class="comment" v-for="comment in item.comments.slice(0, 1)" :key="comment.user + comment.date">
                <div class="comment-header">
                  <span class="user">{{ comment.user }}</span>
                  <span class="date">{{ comment.date }}</span>
                  <span class="comment-rating">
                    <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= comment.rating }">★</span>
                  </span>
                </div>
                <div class="comment-content">{{ comment.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import homeStrategies from '@/data/homeStrategies'
export default {
  name: 'StrategyList',
  data() {
    return {
      strategies: homeStrategies
    }
  }
}
</script>

<style scoped>
.strategy-list-page {
  padding: 32px 0 60px 0;
  max-width: 1200px;
  margin: 0 auto;
}
.breadcrumb {
  color: #999;
  font-size: 20px;
  margin-bottom: 18px;
  padding-left: 16px;
}
.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  padding-left: 16px;
}
.page-title .highlight {
  color: #e94f7a;
  margin-right: 8px;
}
.strategy-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.strategy-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  overflow: hidden;
}
.strategy-img {
  width: 340px;
  height: 220px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 16px;
}
.strategy-content {
  flex: 1;
  padding: 28px 32px 18px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.strategy-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}
.strategy-desc {
  font-size: 16px;
  color: #333;
  margin-bottom: 18px;
  line-height: 1.7;
}
.strategy-rating {
  display: flex;
  align-items: center;
  font-size: 18px;
}
.stars {
  color: #ffd700;
  font-size: 18px;
}
.star {
  margin-right: 2px;
}
.star.filled {
  color: #ffd700;
}
.star:not(.filled) {
  color: #ccc;
}
.score {
  margin-left: 10px;
  color: #666;
  font-size: 16px;
}
.comments-list {
  margin-top: 18px;
  border-top: 1px solid #eee;
  padding-top: 12px;
}
.comment {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #f0f0f0;
}
.comment-header {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  color: #888;
}
.comment-header .user {
  font-weight: bold;
  color: #409eff;
}
.comment-header .date {
  color: #aaa;
  font-size: 14px;
}
.comment-header .comment-rating {
  color: #ffd700;
  font-size: 15px;
}
.comment-header .star {
  margin-right: 1px;
}
.comment-header .star.filled {
  color: #ffd700;
}
.comment-header .star:not(.filled) {
  color: #ccc;
}
.comment-content {
  margin-top: 4px;
  font-size: 15px;
  color: #333;
  line-height: 1.6;
}
</style> 