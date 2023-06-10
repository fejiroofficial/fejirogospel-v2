<script lang="ts">
	import { fly } from 'svelte/transition';

	const NAV_ITEMS = [
		{
			name: 'Blog',
			href: '/'
		},
		{
			name: 'Contact',
			href: '/'
		},
		{
			name: 'Resume',
			href: '/'
		}
	];
</script>

<div class="mobile-tray" in:fly>
	<ul class="nav-items">
		{#each NAV_ITEMS as { name }}
			<li>{name}</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.mobile-tray {
		@apply w-full bg-white fixed flex items-center justify-center;
		height: calc(100% - 100px);
	}
	.nav-items {
		@apply grid text-center gap-6 font-poppins font-light text-[32px] leading-[48px];
	}
</style>
