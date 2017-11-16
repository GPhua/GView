<template>
  <div>
    <AHeader></AHeader>
    <div class="oui-main">
      <ASidebar ref="sidebar"/>
      <ABody/>
    </div>
  </div>
</template>

<script>
  import ASidebar from '../components/Sidebar/app'
  import AHeader from '../components/Header/app'
  import ABody from '../components/Body'

  export default {
    name: 'layout',
    components: {
      ASidebar,
      AHeader,
      ABody
    },
    beforeRouteUpdate (to, from, next) {
      this.$nextTick(() => {
        this.$refs.sidebar.update(to)
      })
      next()
    }
  }
</script>


<style lang="scss" scoped src="../theme/styles/index.scss">

</style>
