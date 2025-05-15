<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <header class="navbar">
      <div class="navbar-main">
        <!-- <img src="https://via.placeholder.com/44x44?text=Logo" alt="logo" class="logo" /> -->
        <span class="site-title">{{ $t('home.title') }}</span>
        <input type="text" class="search-input" :placeholder="$t('home.navbar.searchPlaceholder')" />
      </div>
      <div class="navbar-right">
        <div class="lang-switch">
          <el-button size="mini" @click="$i18n.locale = 'zh'" :type="$i18n.locale === 'zh' ? 'primary' : 'default'">中文</el-button>
          <el-button size="mini" @click="$i18n.locale = 'en'" :type="$i18n.locale === 'en' ? 'primary' : 'default'">English</el-button>
        </div>
        <button class="signup-btn" @click="$router.push('/signup')">{{ $t('home.navbar.signupBtn') }}</button>
      </div>
    </header>

    <!-- 热门风景区块 -->
    <section class="hot-scenery-section">
      <div class="section-title">
        <span class="highlight">{{ $t('home.hotScenery.highlight') }}</span>
        <span>{{ $t('home.hotScenery.title') }}</span>
      </div>
      <div class="scenery-mosaic">
        <div class="big-img scenery-img">
          <img :src="hotScenery[0].image" :alt="hotScenery[0].name" />
          <!-- <div class="scenery-name">{{ hotScenery[0].name }}</div> -->
        </div>
        <div
          class="small-img scenery-img"
          v-for="item in hotScenery.slice(1, 7)"
          :key="item.id"
        >
          <img :src="item.image" :alt="item.name" />
          <!-- <div class="scenery-name">{{ item.name }}</div> -->
        </div>
      </div>
    </section>

    <!-- 景点攻略区块 -->
    <section class="strategy-section">
      <div class="section-header">
        <span class="section-title">{{ $t('home.strategy.title') }}</span>
        <router-link to="/strategies" class="more-link">{{ $t('home.strategy.more') }}</router-link>
      </div>
      <div class="strategy-grid">
        <router-link
          v-for="item in strategies"
          :key="item.id"
          :to="`/strategies/${item.id}`"
          class="strategy-item-link"
          style="text-decoration: none; color: inherit;"
        >
          <div class="strategy-item">
            <img :src="item.image" class="strategy-img" alt="攻略" />
            <div class="strategy-info">
              <div class="strategy-name">{{ item.name }}</div>
              <div class="strategy-rating">
                <span class="stars">
                  <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= item.rating }">★</span>
                </span>
                <span class="score">{{ item.rating }}{{ $t('home.strategy.rating') }}</span>
                <span class="review">（{{ item.reviewCount }}{{ $t('home.strategy.review') }}）</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import homeStrategies from '@/data/homeStrategies'
export default {
  name: 'HomePage',
  data() {
    return {
      activeTab: 'attractions',
      searchQuery: '',
      attractions: [
        {
          id: 1,
          name: '绿带公园',
          image: require('@/assets/images/attractions/greenbelt.jpg'),
          rating: 4.5,
          reviewCount: 545,
          description: '马卡蒂最受欢迎的公园之一，绿意盎然的休闲场所。',
          price: 0
        },
        {
          id: 2,
          name: '阿亚拉博物馆',
          image: require('@/assets/images/attractions/ayala-museum.jpg'),
          rating: 4.7,
          reviewCount: 877,
          description: '展示菲律宾丰富历史文化的重要博物馆。',
          price: 50
        }
      ],
      hotels: [
        {
          id: 1,
          name: '马尼拉新世界酒店',
          image: require('@/assets/images/attractions/greenbelt.jpg'),
          rating: 4.8,
          reviewCount: 7648,
          location: '马卡蒂大道',
          price: 688
        },
        {
          id: 2,
          name: '马尼拉杜斯特塔尼饭店',
          image: require('@/assets/images/attractions/ayala-museum.jpg'),
          rating: 4.6,
          reviewCount: 5440,
          location: '阿亚拉中心',
          price: 588
        }
      ],
      restaurants: [
        {
          id: 1,
          name: 'Circles Event Cafe',
          image: require('@/assets/images/attractions/ayala-center.jpg'),
          rating: 4.7,
          reviewCount: 983,
          cuisine: '菲律宾菜，各国料理',
          location: '新世界酒店',
          priceLevel: '¥¥¥¥'
        },
        {
          id: 2,
          name: 'Benjarong',
          image: require('@/assets/images/attractions/greenbelt.jpg'),
          rating: 4.8,
          reviewCount: 1306,
          cuisine: '亚洲料理，泰国菜',
          location: '杜斯特塔尼酒店',
          priceLevel: '¥¥¥¥'
        }
      ],
      hotScenery: [
        { id: 1, name: 'Ireland', image: 'https://axure-file.lanhuapp.com/md5__30f31ea6f67d62c4a426e7839ca6e958.png' },
        { id: 2, name: 'Cliffs of Moher', image: 'https://axure-file.lanhuapp.com/md5__9543665b955dfdae820291d57c5b2c9b.png' },
        { id: 3, name: 'Kylemore Abbey', image: 'https://axure-file.lanhuapp.com/md5__6703084f237fc8caf63e34b364051556.png' },
        { id: 4, name: 'Howth Head', image: 'https://axure-file.lanhuapp.com/md5__5012ef6413cfb7a74da9d26759abd546.png' },
        { id: 5, name: 'The Dark Hedges', image: 'https://axure-file.lanhuapp.com/md5__a710f2d044143fc20d0ab7b1621a5e29.png' },
        { id: 6, name: 'Galway Cathedral', image: 'https://axure-file.lanhuapp.com/md5__758d9ce6bd8f6730736d524680f971e2.png' },
        { id: 7, name: 'Galway', image: 'https://axure-file.lanhuapp.com/md5__4a00f249142be0ae9d54ddce4ea2d2fc.png' }
      ],
      strategies: homeStrategies
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #f7f7f7;
  min-height: 100vh;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #bdbdbd;
    padding: 0 48px;
    height: 68px;
    box-sizing: border-box;
    .navbar-main {
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
      .logo {
        width: 44px;
        height: 44px;
        margin-right: 16px;
        border-radius: 4px;
        background: #fff;
      }
      .site-title {
        font-size: 28px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 1px;
        margin-right: 28px;
        white-space: nowrap;
      }
      .search-input {
        width: 200px;
        height: 32px;
        border-radius: 6px;
        border: none;
        background: #fff;
        padding: 0 14px;
        font-size: 16px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        outline: none;
        margin-left: 0;
      }
    }
    .navbar-right {
      display: flex;
      align-items: center;
      margin-left: 40px;
      .lang-switch {
        color: #1e90ff;
        font-size: 18px;
        margin-right: 24px;
        font-weight: 500;
        cursor: pointer;
      }
      .signup-btn {
        background: #2196f3;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 36px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s;
        box-shadow: 0 2px 6px rgba(33,150,243,0.08);
      }
      .signup-btn:hover {
        background: #1976d2;
      }
    }
  }

  .hot-scenery-section {
    background: #fff;
    margin: 24px 24px 0 24px;
    border-radius: 8px;
    padding: 24px 32px;
    .section-title {
      font-size: 22px;
      margin-bottom: 18px;
      .highlight {
        color: #e94f7a;
        font-weight: bold;
        margin-right: 8px;
      }
    }
    .scenery-mosaic {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 18px;
      .big-img {
        grid-row: 1 / span 2;
        grid-column: 1 / 2;
        height: 100%;
      }
      .small-img {
        height: 100%;
      }
      .scenery-img {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .scenery-name {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          background: rgba(0,0,0,0.35);
          color: #fff;
          font-size: 18px;
          padding: 10px 16px;
          font-weight: 500;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }

  .search-section {
    margin: -60px auto 40px;
    max-width: 800px;
    padding: 0 20px;
    position: relative;
    z-index: 1;

    .search-card {
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .search-input {
      margin-top: 10px;
    }
  }

  .section {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      h2 {
        font-size: 24px;
        margin: 0;
      }

      .more-link {
        color: #409EFF;
        text-decoration: none;
        display: flex;
        align-items: center;

        i {
          margin-left: 5px;
        }
      }
    }

    .attraction-card,
    .hotel-card,
    .restaurant-card {
      margin-bottom: 20px;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }

      .image-wrapper {
        position: relative;
        
        .image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .price,
        .price-level {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
        }
      }

      .content {
        padding: 15px;

        h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .rating {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          .review-count {
            margin-left: 10px;
            color: #666;
            font-size: 14px;
          }
        }

        .description,
        .location,
        .cuisine {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }

        .location {
          display: flex;
          align-items: center;

          i {
            margin-right: 5px;
          }
        }
      }
    }
  }

  .strategy-section {
    background: #fff;
    margin: 32px 24px 0 24px;
    border-radius: 8px;
    padding: 24px 32px;
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      .section-title {
        font-size: 20px;
        font-weight: bold;
      }
      .more-link {
        color: #409eff;
        font-size: 15px;
        text-decoration: none;
      }
    }
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 22px;
      .strategy-item {
        background: #f3f3f3;
        border-radius: 8px;
        padding: 16px 10px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .strategy-img {
          width: 100px;
          height: 100px;
          background: #c8d0db;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .strategy-info {
          width: 100%;
          .strategy-name {
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 8px;
            text-align: center;
          }
          .strategy-rating {
            display: flex;
            align-items: center;
            justify-content: center;
            .stars {
              color: #ffd700;
              font-size: 15px;
              .star {
                margin-right: 2px;
                &.filled {
                  color: #ffd700;
                }
                &:not(.filled) {
                  color: #ccc;
                }
              }
            }
            .score {
              margin-left: 8px;
              color: #666;
              font-size: 14px;
            }
            .review {
              margin-left: 6px;
              color: #aaa;
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  .footer-section {
    background: #f7f7f7;
    margin-top: 40px;
    padding: 32px 0 0 0;
    border-top: 1px solid #e0e0e0;
    .footer-content {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 32px 24px 32px;
      .footer-left {
        flex: 2;
        .footer-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .footer-desc {
          color: #555;
          font-size: 15px;
          line-height: 1.8;
        }
      }
      .footer-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .footer-info {
          color: #555;
          font-size: 15px;
          margin-bottom: 18px;
          div {
            margin-bottom: 6px;
          }
        }
        .signup-btn {
          background: #409eff;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 8px 28px;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
    .footer-copyright {
      text-align: center;
      color: #aaa;
      font-size: 14px;
      padding: 12px 0 18px 0;
      border-top: 1px solid #e0e0e0;
      background: #f7f7f7;
    }
  }
}

@media (max-width: 900px) {
  .home {
    .banner-grid {
      flex-direction: column;
      height: auto;
      gap: 12px;
      .banner-left, .banner-right-top, .banner-right-bottom {
        height: 180px !important;
        min-height: 120px;
      }
      .banner-right {
        flex-direction: row;
        gap: 12px;
        .banner-right-top, .banner-right-bottom {
          width: 50%;
          height: 100% !important;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .home {
    .banner-grid {
      flex-direction: column;
      height: auto;
      gap: 8px;
      .banner-left, .banner-right-top, .banner-right-bottom {
        height: 120px !important;
        min-height: 80px;
      }
      .banner-right {
        flex-direction: row;
        gap: 8px;
        .banner-right-top, .banner-right-bottom {
          width: 50%;
          height: 100% !important;
        }
      }
    }
  }
}
</style> 