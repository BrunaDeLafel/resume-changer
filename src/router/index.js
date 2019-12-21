import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/todo'
import resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    },
    {
      path:'/resume',
      name:'resume',
      component: resume
    }
  ]
})
