<template>
	<div>
		ddddddd
		<p><button @click="handleClick">点我</button></p>
		<p>{{ appName }}</p>
		<p>userName:{{ userName }}</p>


		<!-- <p>{{ appName2 }}</p> -->
		<p>{{ userName2 }} appNameWithVersion:{{appNameWithVersion}}</p>
	</div>
</template>


<script>
import { mapState,mapGetters } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

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
		},
		
		// ...mapState({
		// 	appName2: state => {
		// 		return state.appName
		// 	}
		// }),
		...mapState({
			userName2: state => state.userName
		}),

		// appNameWithVersion(){
		// 	return this.$store.getters.appNameWithVersion
		// }
		...mapGetters([
			'appNameWithVersion'
		])
	},
	mounted() {
		console.log(this.$bus)
	},
}
</script>
