import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle} from '@/lib/util'

Vue.use(Router)

const router = new Router({
	//mode: 'history',
	routes
  })

  const ISLOGIN = true
  //全局前置守卫
  router.beforeEach((to, from, next) => {
	if(to.name !== 'login'){
		if(ISLOGIN) 
			next()
		else 
			next({name: 'login'})
	}else {
		if(ISLOGIN){
			next({name: 'home'})
		}else {
			next()
		}
	}
  })
  //路由被确认
  router.beforeResolve((to, from, next)=>{
	  to.meta && setTitle(to.meta.title)
	  next()
  })

  //后置钩子 如:加载动画
  router.afterEach((to, from) => {

  })
export default router
