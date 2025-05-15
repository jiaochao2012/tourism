export const getRestaurants = () => {
  return [
    {
      id: 1,
      name: 'Circles Event Cafe',
      image: 'circles.jpg',
      rating: 4.6,
      reviews: 983,
      cuisine: '菲律宾菜，各国料理',
      price: '¥¥¥¥',
      location: '马卡蒂商业区',
      description: '提供国际自助餐，环境优雅'
    },
    {
      id: 2,
      name: 'Benjarong',
      image: 'benjarong.jpg',
      rating: 4.5,
      reviews: 1306,
      cuisine: '亚洲料理，泰国菜',
      price: '¥¥¥¥',
      location: '马卡蒂商业区',
      description: '正宗泰国料理，环境典雅'
    },
    {
      id: 3,
      name: 'Shang Palace',
      image: 'shang-palace.jpg',
      rating: 4.4,
      reviews: 423,
      cuisine: '中餐，亚洲料理',
      price: '¥¥¥¥',
      location: '马卡蒂商业区',
      description: '高档中餐厅，提供正宗粤菜'
    }
  ]
}

export const getRestaurantById = (id) => {
  return getRestaurants().find(restaurant => restaurant.id === id)
} 