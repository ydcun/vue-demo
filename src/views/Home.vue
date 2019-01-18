<template>
  <div class="home">
	  <b>{{food}}</b>
	<button @click="handleClick('back')">返回上一页</button>
	<button @click="handleClick('push')">跳转</button>
	<button @click="handleClick('push2')">跳转2</button>
	<button @click="handleClick('replace')">替换到parent</button>
	<br/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
	  handleClick (type) {
		  if(type === 'back') 
		  	his.$router.go(-1)
		  else if (type === 'push')
		  	this.$router.push('/parent')
		  else if (type === 'push2')
		  	this.$router.push({
				  name: 'parent'
			  })
		  else if (type === 'replace')
			this.$router.replace({
				name: 'ydcun',
				query: {
					name: 'ydcun'
				},
				params: {
					name: 'yyyy'
				}
			})
	  }
  },
  props: {
	  food: {
		  type: String,
		  default: "apple"
	  }
  }
}
</script>
