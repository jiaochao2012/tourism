<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于我们</h3>
        <ul>
          <li><a href="#">公司简介</a></li>
          <li><a href="#">新闻动态</a></li>
          <li><a href="#">商务合作</a></li>
          <li><a href="#">加入我们</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>帮助中心</h3>
        <ul>
          <li><a href="#">常见问题</a></li>
          <li><a href="#">意见反馈</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">隐私政策</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>热门目的地</h3>
        <ul>
          <li><a href="#">绿带公园</a></li>
          <li><a href="#">阿亚拉博物馆</a></li>
          <li><a href="#">Ayala Center</a></li>
          <li><a href="#">Salcedo Market</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>关注我们</h3>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="el-icon-platform-eleme"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-s-promotion"></i>
          </a>
          <a href="#" class="social-link">
            <i class="el-icon-s-cooperation"></i>
          </a>
        </div>
        <div class="qr-code">
          <img src="@/assets/qr-code.png" alt="QR Code" v-if="false">
          <p>扫码关注公众号</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2024 马卡蒂旅游网. 保留所有权利.</p>
        <p>ICP备案号：沪ICP备20013175号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 60px 0 20px;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 0 20px;
    margin-bottom: 40px;
  }

  .footer-section {
    h3 {
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 12px;

        a {
          color: #ecf0f1;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #3498db;
          }
        }
      }
    }
  }

  .social-links {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;

      i {
        font-size: 20px;
        color: #fff;
      }

      &:hover {
        background: #3498db;
      }
    }
  }

  .qr-code {
    text-align: center;

    img {
      width: 120px;
      height: 120px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #bdc3c7;
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
    text-align: center;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    p {
      margin: 5px 0;
      font-size: 14px;
      color: #bdc3c7;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 480px) {
  .footer {
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
}
</style> 