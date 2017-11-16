<template>
  <div class="oui-layout">
    <div class="oui-layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item v-for="item in this.$route.matched" v-if="item.name" :href="item.path">{{item.name}}
        </Breadcrumb-item>
      </Breadcrumb>
    </div>
    <div class="oui-layout-content">
      <div class="oui-layout-content-main">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="oui-layout-copy">
      2017&copy; 云电同方科技有限公司
    </div>
  </div>
</template>
<script>
  export default {
    name: 'oui_body'
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
