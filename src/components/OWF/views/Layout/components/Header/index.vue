<template>
  <div class="oui-header">
    <div class="oui-header-center">
      <div class="oui-logo" @click="$router.push('/')">
        <OIcon type="cloud"/>
        <h2>{{ title }} </h2>
      </div>
      <div class="logout" :title="logout" @click="handleLogout">
        <OIcon type="oui-logout"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'oui_header',
    data () {
      return {
        title: this.$tt('title'),
        logout: this.$tt('layout.header.logout')
      }
    },
    methods: {
      handleLogout () {
        this.$router.push('/logout')
        this.$Message.success(this.$tt('layout.header.success'))
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
