<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-title">{{ $t('about.title') }}</div>
        <div class="footer-desc">
          {{ $t('about.desc') }}
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-info">
          <div>{{ $t('about.email') }}：joywaytours@gmail.com</div>
          <div>{{ $t('about.address') }}：2 Pembroke Street Upper Dublin 2 D02 NY59</div>
        </div>
        <button class="signup-btn" @click="$router.push('/signup')">{{ $t('home.navbar.signupBtn') }}</button>
      </div>
    </div>
    <div class="footer-copyright">
      © 2025 Long Soft Ltd. All rights reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style lang="scss" scoped>
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
</style> 