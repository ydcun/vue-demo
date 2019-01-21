<template>
	<div>
		<a-input v-model="inputValue"></a-input>
		<p>{{ inputValue }}</p>
		<a-input @input="handleInput" :value="inputValue"/>
	</div>
</template>

<<script>

import AInput from "_c/AInput.vue"

export default {
	name:"store",
	data () {
		return {
			inputValue: ''
		}
	},
	components:{
		AInput
	},
	methods: {
		handleInput (val){
			this.inputValue=val
		}
	},		
}
</script>
