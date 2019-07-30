import Vue from 'vue'
import Router from 'vue-router'

const  timeline = () => import('@/components/timeline')
const  image = () => import('@/components/image')
const  container = () => import('@/components/container')
const  theme = () => import('@/components/theme')

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
          component:timeline
        },
        {
          path:'/image',
          name:'image',
          component:image
        },
        {
          path:'/theme',
          name:'theme',
          component:theme
        }
      ]
    }
  ]
})
