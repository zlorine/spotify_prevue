import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Favourites from '@/components/Favourites'
import store from '../store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/favourites',
    	name: 'Favourites',
    	component: Favourites,
      store
    }
  ]
})
