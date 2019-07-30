import Vue from 'vue'
import Router from 'vue-router'
import timeline from '@/components/timeline'
import image from '@/components/image'
import container from '@/components/container'
import theme from '@/components/theme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'app',
      component:container,
      children:[
        {
          path: '/timeline',
          name: 'timeline',
          component: timeline
        },
        {
          path:'/image',
          name:'image',
          component:image
        },
        {
          path:'/theme',
          name:'theme',
          component: theme
        }
      ]
    }
  ]
})
