<script>
	import Nav from './Nav.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
</script>

<header class="header container mx-auto">
	<a class="logo" href="/">Fejiro Gospel</a>
	<Nav />
	<BurgerMenu />
</header>

<style lang="postcss">
	.header {
		@apply h-[100px] container mx-auto flex justify-between items-center;
	}
	.logo {
		@apply text-[26px] lg:text-[32px] leading-[44px] font-medium;
	}
</style>
