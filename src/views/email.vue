<template>
	<div>
		ddddddd
		<p><button @click="handleClick">点我</button></p>
	</div>
</template>

<<script>
export default {
	methods: {
		handleClick (){
			this.$bus.$emit('on-click', 'hello')
		}
	},
	mounted() {
		console.log(this.$bus)
	},
}
</script>
