<template>
  <div>
    <app v-if="type === 'app' && $route.path !== '/login'">
    </app>
    <oui v-if="type === 'oui' && $route.path !== '/login'">
      <slot></slot>
    </oui>
    <router-view v-if="$route.path == '/login'"></router-view>
  </div>
</template>

<script>
  import oui from './views/Layout/OUI'
  import app from './views/Layout/OAPP'
  export default {
    name: 'owf',
    components: {oui, app},
    props: {
      type: {
        type: String,
        default () {
          return 'app'
        }
      }
    }
  }
</script>
