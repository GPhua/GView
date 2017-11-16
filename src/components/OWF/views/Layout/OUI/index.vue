<template>
  <div>
    <OHeader></OHeader>
    <div class="oui-main">
      <OSidebar ref="sidebar">
        <slot></slot>
      </OSidebar>
      <OBody></OBody>
    </div>
  </div>
</template>

<script>
  import OHeader from '../components/Header'
  import OBody from '../components/Body'
  import OSidebar from '../components/Sidebar'

  export default {
    name: 'layout',
    components: {
      OHeader, OBody, OSidebar
    },
    beforeRouteUpdate (to, from, next) {
      next()
    }
  }
</script>


<style lang="scss" scoped src="../theme/styles/index.scss">

</style>
