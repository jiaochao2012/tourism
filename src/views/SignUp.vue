<template>
  <div class="signup-page">
    <div class="signup-form-container">
      <div class="form-title">{{ $t('signup.title') }}</div>
      <el-form :model="form" ref="form" :rules="rules" label-width="100px" class="signup-form">
        <el-form-item :label="$t('signup.nickname')">
          <el-input v-model="form.nickname" :placeholder="$t('signup.nickname')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.email')" prop="email">
          <el-input v-model="form.email" :placeholder="$t('signup.email')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.phone')" prop="phone">
          <el-input v-model="form.phone" :placeholder="$t('signup.phone')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.people')" prop="people">
          <el-input v-model="form.people" :placeholder="$t('signup.people')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.date')">
          <el-date-picker
            v-model="form.dates"
            type="daterange"
            range-separator="~"
            :start-placeholder="$t('signup.startDate')"
            :end-placeholder="$t('signup.endDate')"
            style="width: 100%;"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" style="width: 100%;">{{ $t('signup.submit') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        nickname: '',
        email: '',
        phone: '',
        people: '',
        dates: []
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: ['blur', 'change'] }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: ['blur', 'change'] }
        ],
        people: [
          { required: true, message: '请输入预定人数', trigger: 'blur' },
          { pattern: /^\d+$/, message: '人数只能为数字', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message.success('提交成功！')
          setTimeout(() => {
            this.$router.push('/')
          }, 1500)
        }
      })
    }
  }
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.signup-form-container {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 40px 60px 32px 60px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  min-width: 480px;
}
.form-title {
  font-size: 28px;
  color: #e94f7a;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: left;
}
.signup-form {
  width: 100%;
}
.el-form-item {
  margin-bottom: 24px;
}
.el-button {
  font-size: 18px;
  height: 44px;
  border-radius: 6px;
}
</style> 