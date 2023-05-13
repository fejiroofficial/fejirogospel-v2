<script>
	import Nav from './Nav.svelte';
</script>

<header class="header container mx-auto">
	<a class="logo" href="/">Fejiro Gospel</a>
	<Nav />
</header>

<style lang="postcss">
	.header {
		@apply h-[100px] container mx-auto flex justify-between items-center;
	}
	.logo {
		@apply text-[32px] leading-[44px] font-medium;
	}
</style>
