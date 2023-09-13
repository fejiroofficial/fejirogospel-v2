<script>
	import Nav from './Nav.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import MobileNav from './MobileNav.svelte';

	let showMobileNav = false;
</script>

<header class="header">
	<div class="header-pane">
		<a class="logo-groupings" href="/">
			<div class="logo-wrapper">
				<div class="logo">Fejiro Gospel</div>
				<div class="logo">Fejiro Gospel</div>
			</div>
		</a>
		<Nav />
		<BurgerMenu bind:showMobileNav />
	</div>
	{#if showMobileNav}
		<MobileNav on:close={() => (showMobileNav = false)} />
	{/if}
</header>

<style lang="postcss">
	.header-pane {
		@apply h-[100px] container mx-auto flex justify-between items-center;
	}
	.logo {
		@apply text-[26px] lg:text-[32px] leading-[44px] font-poppins font-light;
	}
	.logo-groupings {
		@apply h-[43px] overflow-hidden;
	}
	.logo-wrapper {
		@apply flex flex-col;
		transition: 0.3s ease-in-out;
		transform: translateY(0);
	}
	.logo-wrapper:hover {
		@apply lg:translate-y-[-45px];
	}
</style>
