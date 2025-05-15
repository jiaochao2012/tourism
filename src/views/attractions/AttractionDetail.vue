<template>
  <div class="attraction-detail">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/attractions' }">景点</el-breadcrumb-item>
        <el-breadcrumb-item>{{ attraction.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 图片轮播 -->
    <div class="image-gallery">
      <el-carousel height="500px" indicator-position="outside">
        <el-carousel-item v-for="(image, index) in attraction.images" :key="index">
          <img :src="require(`@/assets/images/attractions/${image}`)" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="content-wrapper">
      <div class="main-content">
        <!-- 景点信息 -->
        <div class="attraction-info">
          <div class="header">
            <h1>{{ attraction.name }}</h1>
            <div class="rating">
              <i class="el-icon-star-on"></i>
              <span>{{ attraction.rating }}</span>
              <span class="reviews">({{ attraction.reviews }}条评价)</span>
            </div>
            <div class="type">{{ attraction.type }}</div>
          </div>

          <div class="description">
            <h2>景点介绍</h2>
            <p>{{ attraction.description }}</p>
          </div>

          <div class="details">
            <h2>详细信息</h2>
            <div class="detail-item">
              <i class="el-icon-location"></i>
              <span>地址：{{ attraction.address }}</span>
            </div>
            <div class="detail-item">
              <i class="el-icon-time"></i>
              <span>开放时间：{{ attraction.openingHours }}</span>
            </div>
            <div class="detail-item">
              <i class="el-icon-phone"></i>
              <span>电话：{{ attraction.phone }}</span>
            </div>
            <div class="detail-item">
              <i class="el-icon-money"></i>
              <span>门票：{{ attraction.price === 0 ? '免费' : `¥${attraction.price}` }}</span>
            </div>
          </div>

          <div class="transportation">
            <h2>交通指南</h2>
            <div class="transportation-item" v-for="(item, index) in attraction.transportation" :key="index">
              <i :class="item.icon"></i>
              <div class="transportation-info">
                <div class="transportation-type">{{ item.type }}</div>
                <div class="transportation-desc">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="sidebar">
        <div class="nearby-attractions">
          <h3>周边景点</h3>
          <div class="nearby-list">
            <div class="nearby-item" v-for="item in nearbyAttractions" :key="item.id" @click="viewAttraction(item.id)">
              <img :src="require(`@/assets/images/attractions/${item.image}`)" class="nearby-image">
              <div class="nearby-info">
                <h4>{{ item.name }}</h4>
                <div class="nearby-rating">
                  <i class="el-icon-star-on"></i>
                  <span>{{ item.rating }}</span>
                  <span class="reviews">({{ item.reviews }}条评价)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAttractionById, getNearbyAttractions } from '@/mock/attractions'

export default {
  name: 'AttractionDetail',
  data() {
    return {
      attraction: {},
      nearbyAttractions: []
    }
  },
  methods: {
    loadAttractionData() {
      const id = parseInt(this.$route.params.id)
      this.attraction = getAttractionById(id)
      this.nearbyAttractions = getNearbyAttractions(id)
    },
    viewAttraction(id) {
      this.$router.push(`/attractions/${id}`)
    }
  },
  created() {
    this.loadAttractionData()
  },
  watch: {
    '$route.params.id'() {
      this.loadAttractionData()
    }
  }
}
</script>

<style scoped>
.attraction-detail {
  padding: 20px;
  background-color: #f5f5f5;
}

.breadcrumb {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
}

.image-gallery {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.main-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  margin: 0 0 10px;
  font-size: 32px;
  color: #333;
}

.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #34E0A1;
  font-size: 18px;
  margin-bottom: 10px;
}

.reviews {
  color: #666;
  font-size: 14px;
}

.type {
  display: inline-block;
  padding: 4px 12px;
  background-color: #34E0A1;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
}

.description, .details, .transportation {
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin: 0 0 20px;
}

.description p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #666;
}

.detail-item i {
  color: #34E0A1;
  font-size: 20px;
}

.transportation-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.transportation-item i {
  color: #34E0A1;
  font-size: 24px;
}

.transportation-info {
  flex: 1;
}

.transportation-type {
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

.transportation-desc {
  color: #666;
  font-size: 14px;
}

.sidebar {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nearby-attractions h3 {
  font-size: 20px;
  color: #333;
  margin: 0 0 20px;
}

.nearby-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nearby-item {
  display: flex;
  gap: 15px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nearby-item:hover {
  background-color: #f8f8f8;
}

.nearby-image {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}

.nearby-info {
  flex: 1;
}

.nearby-info h4 {
  margin: 0 0 5px;
  font-size: 16px;
  color: #333;
}

.nearby-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #34E0A1;
  font-size: 14px;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  
  .image-gallery {
    height: 300px;
  }
  
  .header h1 {
    font-size: 24px;
  }
}
</style> 