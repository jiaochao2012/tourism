<template>
  <div class="strategy-detail-page">
    <!-- <NavHeader /> -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/strategies' }">景点攻略</el-breadcrumb-item>
        <el-breadcrumb-item>{{ strategy.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-title">
      <span class="highlight">爱尔兰旅游</span> 景点攻略
    </div>
    <div class="detail-main">
      <div class="detail-content">
        <div class="strategy-title">{{ strategy.name }}景点点评</div>
        <div class="strategy-desc">“很棒的一次旅行，绝对值得一去！Lydia 的导游很棒，绝对物超所值。品酒体验非常棒，我们学习了如何正确地闻和品尝威士忌。额外获得了一次品酒机会，而且赠送的酒杯非常贴心。我们提前一周预订，省了不少钱。礼品店也很不错。”</div>
        <div class="strategy-rating">
          <span class="stars">
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= strategy.rating }">★</span>
          </span>
          <span class="score">{{ strategy.rating }}星</span>
        </div>
        <div class="comments-list">
          <div class="comment" v-for="comment in strategy.comments" :key="comment.user + comment.date">
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
      <div class="detail-image">
        <img :src="strategy.image" :alt="strategy.name" />
      </div>
    </div>
  </div>
</template>

<script>
import homeStrategies from '@/data/homeStrategies'
export default {
  name: 'StrategyDetail',
  data() {
    return {
      strategy: {
        name: '',
        image: '',
        rating: 0,
        comments: []
      }
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    const found = homeStrategies.find(item => item.id === id)
    if (found) {
      this.strategy = found
    }
  }
}
</script>

<style scoped>
.strategy-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 60px 0;
}
.breadcrumb {
  color: #999;
  font-size: 20px;
  margin-bottom: 18px;
  padding-left: 16px;
}
.breadcrumb a {
  color: #409eff;
  text-decoration: none;
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
.detail-main {
  display: flex;
  gap: 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 36px 32px;
  align-items: flex-start;
}
.detail-content {
  flex: 2;
}
.detail-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail-image img {
  width: 340px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
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
  margin-bottom: 18px;
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