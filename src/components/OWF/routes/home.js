/**
 *这个样的写法是异步加载，webpack打包时chunkFilename会生成多个js文件
 export default {
    path: '/',
    component: resolve => require(['@/app/Home'], resolve)
  }
 */
import home from '../views/Home'
export default {
  path: '/',
  component: home
}
