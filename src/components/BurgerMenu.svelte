<script>
	import { fade } from 'svelte/transition';

	import burgerMenuIcon from '$lib/assets/burger-menu.svg';
	import closeIcon from '$lib/assets/close.svg';

	let showMobileNav = false;

	function handleShowNav() {
		showMobileNav = !showMobileNav;
	}
</script>

<div class="menu-icon">
	{#if showMobileNav}
		<button on:click={handleShowNav} in:fade="{{delay: 150, duration: 300}}">
			<img src={closeIcon} alt="close menu" />
		</button>
	{:else}
		<button on:click={handleShowNav}>
			<img src={burgerMenuIcon} alt="menu" in:fade="{{delay: 150, duration: 300}}" />
		</button>
	{/if}
</div>

<style lang="postcss">
	.menu-icon {
		@apply block lg:hidden;
	}
</style>
