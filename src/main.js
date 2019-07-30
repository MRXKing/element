// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Timeline,TimelineItem,Menu,InfiniteScroll,Container,Row,Col,MenuItem,Header,Aside,Main,Card,Backtop} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Menu)
Vue.use(InfiniteScroll)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Card)
Vue.use(Container)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Backtop)
Vue.use(Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
    goRouterPath(path){
      this.$router.push({path})
    }
  }
})
