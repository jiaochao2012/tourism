<template>
  <footer class="app-footer">
    <div class="footer-main">
      <div class="footer-section">
        <h4>猫途鹰点评</h4>
        <ul>
          <li><a href="#">关于猫途鹰</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">职业发展</a></li>
          <li><a href="#">媒体中心</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>猫途鹰网站</h4>
        <ul>
          <li><a href="#">写点评</a></li>
          <li><a href="#">添加新景点</a></li>
          <li><a href="#">旅行者之选</a></li>
          <li><a href="#">猫途鹰移动应用</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>探索更多</h4>
        <ul>
          <li><a href="#">酒店</a></li>
          <li><a href="#">景点</a></li>
          <li><a href="#">餐厅</a></li>
          <li><a href="#">旅游攻略</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>帮助中心</h4>
        <ul>
          <li><a href="#">常见问题</a></li>
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">Cookie政策</a></li>
          <li><a href="#">使用条款</a></li>
        </ul>
      </div>
      <div class="footer-section social">
        <h4>关注我们</h4>
        <div class="social-icons">
          <a href="#" aria-label="WeChat"><i class="el-icon-chat-dot-round"></i></a>
          <a href="#" aria-label="Weibo"><i class="el-icon-s-promotion"></i></a>
          <a href="#" aria-label="Facebook"><i class="el-icon-message"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 猫途鹰 TripAdvisor. 保留所有权利。</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #f7f7f7;
  color: #555;
  font-size: 14px;
  margin-top: 40px;
  border-top: 1px solid #e5e5e5;
}
.footer-main {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px 20px;
  justify-content: space-between;
}
.footer-section {
  min-width: 160px;
  margin-bottom: 20px;
}
.footer-section h4 {
  font-size: 16px;
  color: #222;
  margin-bottom: 12px;
  font-weight: 600;
}
.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-section ul li {
  margin-bottom: 8px;
}
.footer-section ul li a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-section ul li a:hover {
  color: #34E0A1;
}
.social-icons {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.social-icons a {
  color: #34E0A1;
  font-size: 22px;
  transition: color 0.2s;
}
.social-icons a:hover {
  color: #222;
}
.footer-bottom {
  text-align: center;
  padding: 16px 0 12px 0;
  color: #888;
  font-size: 13px;
  border-top: 1px solid #e5e5e5;
  background: #fafafa;
}
@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    padding: 30px 10px 10px 10px;
  }
  .footer-section {
    min-width: 0;
    margin-bottom: 18px;
  }
}
</style> 