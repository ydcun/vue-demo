<template>
	<div>
		ddddddd
		<p><button @click="handleClick">点我</button></p>
		<p>{{ appName }}</p>
		<p>userName:{{ userName }}</p>
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
		},
		userName () {
			return this.$store.state.user.userName
		}

	},
	mounted() {
		console.log(this.$bus)
	},
}
</script>
