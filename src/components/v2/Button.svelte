<script>
	export let variation = 'primary';

	export let size = 'regular';

	const colorVariants = {
		primary: 'bg-blue-600 hover:bg-blue-500',
		secondary: 'border border-solid border-white'
	};

	const sizeVariants = {
		regular: 'px-[20px] py-[12px] text-xs'
	};
</script>

<button class={`btn ${colorVariants[variation]} ${sizeVariants[size]}`}>
	<slot>Button</slot>
</button>

<style lang="postcss">
	.btn {
		@apply font-semibold rounded;
	}
</style>
