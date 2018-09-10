import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/Pages/HelloWorld'
import Login from '@/Pages/Login'
import Register from '@/Pages/Register'
import NotFound from '@/Pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
