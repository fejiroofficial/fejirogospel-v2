<script>
	export let variant = 'primary';

	export let size = 'regular';

	export let width = 'block';

	export let href = '';

	const widthVariant = {
		block: 'flex-none',
		fill: 'flex-auto'
	};

	const colorVariants = {
		primary: 'bg-blue hover:bg-blue-500',
		secondary: 'border border-solid border-white'
	};

	const sizeVariants = {
		regular: 'px-[20px] py-[12px] text-xs',
		medium: 'px-[24px] py-[16px] text-sm',
		large: 'px-[40px] py-[16px] text-md'
	};
</script>

{#if href}
	<a {href} class={`btn text-center ${colorVariants[variant]} ${sizeVariants[size]} ${widthVariant[width]}`} target="_blank">
		<slot>Link</slot>
	</a>
{:else}
	<button class={`btn ${colorVariants[variant]} ${sizeVariants[size]} ${widthVariant[width]}`}>
		<slot>Button</slot>
	</button>
{/if}

<style lang="postcss">
	.btn {
		@apply font-semibold rounded;
	}
</style>
