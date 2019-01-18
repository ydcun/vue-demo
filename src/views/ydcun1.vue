<template>
  <div class="home">
    HelloWorld {{ name }}
  </div>
</template>

<script>

export default {
  //
  props: {
	  name: {
		  type: String,
		  default: 'hi'
	  }
  },
  //复用守卫
  beforeRouteUpdate(to,from,next){
	  console.log(to,from)
  }
}
</script>
