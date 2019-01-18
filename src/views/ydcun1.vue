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
  }
}
</script>
