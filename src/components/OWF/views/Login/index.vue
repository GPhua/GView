<template>
  <div class="loginWindow" >
    <h1>{{ this.$tt('title') }}</h1>
    <div class="login-form">
      <!--<div class="close"> </div>-->
      <div class="head-info">
        <label class="lbl-1"> </label>
        <label class="lbl-2"> </label>
        <label class="lbl-3"> </label>
      </div>
      <div class="clear"></div>
      <div class="avtar">
        <img src="" class="headImg" height="85px"/>
      </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <Form-item prop="username">
          <input type="text" v-model="formValidate.username" class="text" value=""
                 :placeholder="this.$tt('login.usernameTip')"/>
        </Form-item>

        <Form-item prop="password">
          <div class="key">
            <input type="password" v-model="formValidate.password" value=""
                   :placeholder="this.$tt('login.passwordTip')"/>
          </div>
        </Form-item>
        <Form-item>
          <div class="signin">
            <input type="submit" @click="handleLogin" :value="this.$tt('login.login')">
          </div>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import auth from '../../../../utils/auth'
  export default {
    name: 'login',
    data () {
      return {
        formValidate: {
          username: 'admin',
          password: 'admin'
        },
        ruleValidate: {
          username: [
            {
              required: true,
              message: this.$tt('login.usernameTip')
            }
          ],
          password: [
            {
              required: true,
              message: this.$tt('login.passwordTip')
            }
          ]
        }
      }
    },
    mounted () {
      $('div.loginWindow').height($(document.body).height())
    },
    methods: {
      handleLogin () {
        this.$refs.formValidate.validate((valid) => {
          if (valid) {
            this.$store.dispatch('login', {params: this.formValidate}).then(() => {
              let res = this.$store.getters.getLoginloginResult
              if (res && res.token) {
                auth.login(res)
                this.$router.push('/')
                this.$Message.success('登录成功')
              } else {
                this.$Message.error(this.$tt('login.loginError'))
              }
            }).catch((e) => {
              this.$Message.error(this.$tt('login.loginError'))
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
