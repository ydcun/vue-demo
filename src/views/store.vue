<template>
	<div>
		<a-input v-model="inputValue"></a-input>
		<p>{{ inputValue }} -> lastLetter is {{inputValueLastLetter}} </p>
		<a-input @input="handleInput" :value="inputValue"/>
		<a-show :showValue="inputValue">ShowValue:</a-show>
	</div>
</template>

<<script>

import AInput from "_c/AInput.vue"
import AShow from '_c/AShow.vue'

export default {
	name:"store",
	data () {
		return {
			inputValue: ''
		}
	},
	components:{
		AInput,
		AShow
	},
	methods: {
		handleInput (val){
			this.inputValue=val
		}
	},
	computed: {
		inputValueLastLetter(){
			return this.inputValue.substr(-1,1)
		}
	},		
}
</script>
