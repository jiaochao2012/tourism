// 景点数据
export const attractions = [
  {
    id: 1,
    name: '绿带公园',
    image: 'greenbelt.jpg',
    type: '公园',
    rating: 4.5,
    reviews: 545,
    description: '马卡蒂最受欢迎的公园之一，绿意盎然的休闲场所。这里不仅是当地人休闲放松的好去处，也是游客了解当地文化的窗口。公园内设有多个休息区、运动设施和艺术装置，全年举办各类文化活动和展览。',
    price: 0,
    openingHours: '周一至周日 06:00-22:00',
    address: '马卡蒂市阿亚拉中心',
    phone: '+63 2 8888 8888',
    transportation: [
      {
        type: '地铁',
        icon: 'el-icon-train',
        description: '乘坐MRT到达Ayala站下车步行5分钟'
      },
      {
        type: '公交',
        icon: 'el-icon-bus',
        description: '可以乘坐公交车路线：A、B、C线'
      },
      {
        type: '出租车',
        icon: 'el-icon-taxi',
        description: '打车或使用叫车软件直达'
      }
    ],
    images: ['greenbelt.jpg', 'greenbelt-2.jpg', 'greenbelt-3.jpg']
  },
  {
    id: 2,
    name: '阿亚拉博物馆',
    image: 'ayala-museum.jpg',
    type: '博物馆',
    rating: 4.7,
    reviews: 877,
    description: '展示菲律宾丰富历史文化的重要博物馆。馆内收藏了大量珍贵的历史文物和艺术品，通过多媒体技术生动展现了菲律宾的历史变迁。定期举办各类文化展览和教育活动。',
    price: 50,
    openingHours: '周二至周日 09:00-18:00',
    address: '马卡蒂市阿亚拉大道',
    phone: '+63 2 7777 7777',
    transportation: [
      {
        type: '地铁',
        icon: 'el-icon-train',
        description: '乘坐MRT到达Ayala站下车步行10分钟'
      },
      {
        type: '公交',
        icon: 'el-icon-bus',
        description: '可以乘坐公交车路线：D、E线'
      },
      {
        type: '出租车',
        icon: 'el-icon-taxi',
        description: '打车或使用叫车软件直达'
      }
    ],
    images: ['ayala-museum.jpg', 'ayala-museum-2.jpg', 'ayala-museum-3.jpg']
  },
  {
    id: 3,
    name: 'Ayala Center',
    image: 'ayala-center.jpg',
    type: '购物中心',
    rating: 4.6,
    reviews: 332,
    description: '集购物、餐饮、娱乐于一体的现代化商业中心。拥有众多国际品牌和本地特色店铺，是马卡蒂最繁华的商业区之一。',
    price: 0,
    openingHours: '周一至周日 10:00-22:00',
    address: '马卡蒂市阿亚拉大道',
    phone: '+63 2 6666 6666',
    transportation: [
      {
        type: '地铁',
        icon: 'el-icon-train',
        description: '乘坐MRT到达Ayala站下车步行5分钟'
      },
      {
        type: '公交',
        icon: 'el-icon-bus',
        description: '可以乘坐公交车路线：F、G线'
      },
      {
        type: '出租车',
        icon: 'el-icon-taxi',
        description: '打车或使用叫车软件直达'
      }
    ],
    images: ['ayala-center.jpg', 'ayala-center-2.jpg', 'ayala-center-3.jpg']
  }
]

// 获取景点列表
export const getAttractions = () => {
  return attractions
}

// 获取景点详情
export const getAttractionById = (id) => {
  return attractions.find(item => item.id === id)
}

// 获取周边景点
export const getNearbyAttractions = (id) => {
  return attractions.filter(item => item.id !== id).slice(0, 3)
} 