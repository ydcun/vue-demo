<template>
	<div>
		ddddddd
		<p><button @click="handleClick">点我</button></p>
		<p>{{ appName }}</p>
	</div>
</template>

<<script>
export default {
	methods: {
		handleClick (){
			this.$bus.$emit('on-click', 'hello')
		}
	},
	computed: {
		appName () {
			return this.$store.state.appName
		}
	},
	mounted() {
		console.log(this.$bus)
	},
}
</script>
