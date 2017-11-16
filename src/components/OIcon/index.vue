<template>
  <i class="iconfont" :class="'icon-' + type" />
</template>

<script>
  export default {
    name: 'o_icon',
    props: {
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
