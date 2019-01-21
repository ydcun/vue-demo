<template>
	<div>
		<p>{{ showValue }}</p>
	</div>
</template>

<script>
export default {
	name: "ashow",
	props:{
		showValue:{
			type: [String, Number],
			default: ''
		}
	}
}
</script>
