import Home from '@/views/Home.vue'

export default [
  {
	path: '/',
	alias: '/home-page',
    name: 'home',
	component: Home,
	props: route => ({
		food: route.query.food
	}),
	//路由独享守卫
	beforeEnter: (to, from, next) => {
		// if(from.name==='login')
		// 	alert("from login")
		// else
		// 	alert("no from login")
		next()
	},
	meta:{
		title:'home_ydcun'
	}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
	props: {
		food: "banna"
	}
  },
  {
	path: '/ydcun/:name',
	name: 'ydcun',
    component: () => import('@/views/ydcun.vue')
  },
  {
	  path: '/parent',
	  name: 'parent',
	  component: () => import('@/views/parent.vue'),
	  children: [
		  {
			  path: 'child',
			  component: () => import('@/views/child.vue')
		  }
	  ]
  },
  {
	  path: '/child',
	  component: () => import('@/views/child.vue')
  },
  {
	  path: '/name_view',
	  components: {
		  default: () => import('@/views/child.vue'),
		  tel: () => import('@/views/tel.vue'),
		  email: () => import('@/views/email.vue')
	  }
  },
  {
	  path: '/main',
	  redirect: '/'
  },
  {
	  path: '/main2',
	  redirect: {
		  name: 'home'
	  }
  },
  {
	  path: '/main3',
	  //返回路由的name
	  redirect: to => {
		  console.log(to)
		  return {
			  name: 'home'
		  }
	  }
  },
  {
	  path: '/main4',
	  //直接返回路径
	  redirect: to => {
		  return '/'
	  }
  },
  {
	  path: '/ydcun1/:name',
	  name: 'ydcun1',
	  component: () => import('@/views/ydcun1.vue'),
	  props: true
  },
  {
	  path: '/login',
	  name: 'login',
	  component: () => import('@/views/login.vue')
  },
  {
	  path: '/store',
	  component: () => import("@/views/store.vue")
  },
  {
	  path: '*',
	  component: () => import('@/views/error_404.vue')
  }
]
