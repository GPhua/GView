<template>
  <div class="oui-sidebar">
    <Menu ref="menu" :active-name="activeName" width="auto" :open-names="openNames" @on-select="handleSelect">
      <div v-for="menu in appMenu.appMenus">
        <Submenu :name="menu.id">
          <template slot="title">
            <Icon type="document-text"/>
            {{menu.menuName}}
          </template>
            <div v-for="menuItem in menu.subMenu">
              <Menu-item :name="!menuItem.url || menuItem.url === '' ? menuItem.id : menuItem.url ">{{menuItem.menuName}}</Menu-item>
            </div>
        </Submenu>
      </div>
    </Menu>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'app_sidebar',
    data () {
      return {
        activeName: '',
        openNames: []
      }
    },
    created () {
      this.get()
    },
    computed: mapState(['appMenu']),
    methods: {
      get () {
        var appId = this.$oui.config.APP_ID
        appId = appId === null || appId === undefined ? this.$oui.urlParams.appId : appId
        appId = appId === null || appId === undefined ? this.$route.query.appId : appId
        appId = appId === null || appId === undefined ? this.$route.params.appId : appId
        this.$store.dispatch('getAppMenus', {varPath: '/' + appId})
      },
      handleSelect (name) {
        this.$router.push(name)
      },
      update (route) {
        const path = route ? route.path : this.$route.path
        const openName = path.split('/')[1]
        const activeName = '/' + openName
        this.$set(this, 'activeName', activeName)
        this.$nextTick(() => {
          this.$refs.menu.updateActiveName()
          this.openNames.push(openName)
          this.$refs.menu.$children.forEach((item) => {
            item.opened = false
          })
          this.$refs.menu.updateOpened()
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="../theme/styles/index.scss">
</style>
