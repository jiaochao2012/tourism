const fs = require('fs')
const path = require('path')
const { createCanvas } = require('canvas')

// 创建目录
const dirs = [
  'src/assets/images/attractions',
  'src/assets/images/avatars',
  'src/assets/images/reviews'
]

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
})

// 生成图片
function generateImage(width, height, text, outputPath) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // 背景色
  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, width, height)

  // 文字
  ctx.fillStyle = '#666'
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, width / 2, height / 2)

  // 保存图片
  const buffer = canvas.toBuffer('image/jpeg')
  fs.writeFileSync(outputPath, buffer)
}

// 生成景点图片
generateImage(800, 600, 'Greenbelt Park', 'src/assets/images/attractions/greenbelt.jpg')
generateImage(800, 600, 'Ayala Museum', 'src/assets/images/attractions/ayala-museum.jpg')
generateImage(800, 600, 'Ayala Center', 'src/assets/images/attractions/ayala-center.jpg')

// 生成头像
generateImage(100, 100, 'User 1', 'src/assets/images/avatars/user1.jpg')
generateImage(100, 100, 'User 2', 'src/assets/images/avatars/user2.jpg')
generateImage(100, 100, 'User 3', 'src/assets/images/avatars/user3.jpg')
generateImage(100, 100, 'User 4', 'src/assets/images/avatars/user4.jpg')

// 生成评论图片
generateImage(400, 300, 'Review 1-1', 'src/assets/images/reviews/review1-1.jpg')
generateImage(400, 300, 'Review 1-2', 'src/assets/images/reviews/review1-2.jpg')
generateImage(400, 300, 'Review 3-1', 'src/assets/images/reviews/review3-1.jpg')

console.log('Images generated successfully!') 