<template>
  <div class="attraction-list">
    <!-- <NavHeader /> -->
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>马卡蒂</el-breadcrumb-item>
        <el-breadcrumb-item>景点</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 页面标题 -->
    <div class="page-header">
      <h1>马卡蒂景点</h1>
      <p>探索马卡蒂最受欢迎的景点，从历史博物馆到现代购物中心，应有尽有。</p>
    </div>

    <!-- 筛选区域 -->
    <div class="filter-section">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select v-model="selectedType" placeholder="景点类型" @change="handleFilterChange">
            <el-option label="全部" value=""></el-option>
            <el-option label="公园" value="公园"></el-option>
            <el-option label="博物馆" value="博物馆"></el-option>
            <el-option label="购物中心" value="购物中心"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="sortBy" placeholder="排序方式" @change="handleFilterChange">
            <el-option label="评分最高" value="rating"></el-option>
            <el-option label="评价最多" value="reviews"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>

    <!-- 景点列表 -->
    <div class="attractions-grid">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" v-for="attraction in displayedAttractions" :key="attraction.id">
          <el-card class="attraction-card" :body-style="{ padding: '0px' }">
            <div class="image-container">
              <img :src="require(`@/assets/images/attractions/${attraction.image}`)" class="image">
              <div class="rating-badge">
                <i class="el-icon-star-on"></i>
                {{ attraction.rating }}
              </div>
            </div>
            <div class="content">
              <h3>{{ attraction.name }}</h3>
              <div class="info">
                <span class="type">{{ attraction.type }}</span>
                <span class="reviews">{{ attraction.reviews }}条评价</span>
              </div>
              <p class="description">{{ attraction.description }}</p>
              <div class="footer">
                <el-button type="primary" @click="viewDetail(attraction.id)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="filteredAttractions.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getAttractions } from '@/mock/attractions'

export default {
  name: 'AttractionList',
  data() {
    return {
      attractions: [],
      displayedAttractions: [],
      pageSize: 6,
      currentPage: 1,
      selectedType: '',
      sortBy: 'rating'
    }
  },
  computed: {
    filteredAttractions() {
      let result = [...this.attractions]
      
      // 按类型筛选
      if (this.selectedType) {
        result = result.filter(item => item.type === this.selectedType)
      }
      
      // 排序
      if (this.sortBy === 'rating') {
        result.sort((a, b) => b.rating - a.rating)
      } else if (this.sortBy === 'reviews') {
        result.sort((a, b) => b.reviews - a.reviews)
      }
      
      return result
    }
  },
  methods: {
    loadAttractions() {
      this.attractions = getAttractions()
      this.updateDisplayedAttractions()
    },
    updateDisplayedAttractions() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      this.displayedAttractions = this.filteredAttractions.slice(start, end)
    },
    handleCurrentChange(page) {
      this.currentPage = page
      this.updateDisplayedAttractions()
    },
    handleFilterChange() {
      this.currentPage = 1
      this.updateDisplayedAttractions()
    },
    viewDetail(id) {
      this.$router.push(`/attractions/${id}`)
    }
  },
  created() {
    this.loadAttractions()
  }
}
</script>

<style scoped>
.attraction-list {
  padding: 20px;
  background-color: #f5f5f5;
}

.breadcrumb {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
}

.page-header {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-header h1 {
  margin: 0 0 10px;
  font-size: 28px;
  color: #333;
}

.page-header p {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.filter-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.attractions-grid {
  margin-bottom: 30px;
}

.attraction-card {
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.attraction-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.attraction-card:hover .image {
  transform: scale(1.1);
}

.rating-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #34E0A1;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.content {
  padding: 15px;
}

.content h3 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.description {
  margin: 0 0 15px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.footer {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style> 