import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/ydcun/:name',
    component: () => import('@/views/ydcun.vue')
  },
  {
	  path: '/parent',
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
	  
  }
]
