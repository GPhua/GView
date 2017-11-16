<template>
  <div>
    <slot></slot>
    <Table :context="$parent" class="margin-bottom" border :columns="columns" :data="pagedata" :selection="[1]"
           @on-selection-change="handleSectionChange"></Table>
    <Page class="page" :total="total" :current="current" :page-size="config.PAGE_SIZE" show-total show-elevator
          @on-change="handlePageChange"></Page>
  </div>
</template>

<script>
  import config from '../../../../utils/config'

  export default {
    name: 'list',
    props: {
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      data: {
        type: Array,
        default () {
          return []
        }
      },
      url: {
        type: String,
        default () {
          return null
        }
      }
    },
    data () {
      return {
        config,
        total: 0,
        current: 1,
        pagedata: [],
        selection: [],
        historyData: []
      }
    },
    methods: {
      handleSectionChange (selection) {
        this.$set(this, 'selection', selection)
      },
      handlePageChange (current) {
        current = current !== undefined ? current : 1
        if (this.url) {
          this.handleUrlProxyData(current)
        } else {
          this.handleSimpleData(current)
        }
        this.$emit('on-change', current)
      },
      handleSimpleData (current) {
        var _start = (current - 1) * config.PAGE_SIZE
        var _end = current * config.PAGE_SIZE
        this.$set(this, 'total', this.data.length)
        if (this.data && this.pagedata.length >= _start) {
          this.pagedata = this.data.slice(_start, _end)
        }
      },
      handleUrlProxyData (current) {

      }
    },
    created () {
      this.handlePageChange(this.current)
    }
  }
</script>
<style lang="scss" scoped src="./theme/styles/index.scss"></style>
