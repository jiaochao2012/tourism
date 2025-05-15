export const getHotels = () => {
  return [
    {
      id: 1,
      name: '马尼拉新世界酒店',
      image: 'new-world.jpg',
      rating: 4.5,
      reviews: 7648,
      price: 1200,
      location: '马卡蒂市中心',
      description: '豪华五星级酒店，位于马卡蒂商业区中心'
    },
    {
      id: 2,
      name: '马尼拉杜斯特塔尼饭店',
      image: 'dusit-thani.jpg',
      rating: 4.4,
      reviews: 5440,
      price: 1500,
      location: '马卡蒂商业区',
      description: '泰国知名酒店品牌，提供豪华住宿体验'
    },
    {
      id: 3,
      name: '马卡蒂套房假日酒店',
      image: 'holiday-inn.jpg',
      rating: 4.3,
      reviews: 2344,
      price: 800,
      location: '马卡蒂商业区',
      description: '国际连锁酒店，提供舒适的住宿环境'
    }
  ]
}

export const getHotelById = (id) => {
  return getHotels().find(hotel => hotel.id === id)
} 