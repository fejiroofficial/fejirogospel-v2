<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const NAV_ITEMS = [
		{
			name: 'Blog',
			href: '/'
		},
		{
			name: 'Contact',
			href: '/about'
		},
		{
			name: 'Resume',
			href: '/resume.pdf'
		}
	];

	const dispatch = createEventDispatcher();

	function forward() {
    dispatch('close');
  }
</script>

<div class="mobile-tray" in:fly>
	<ul class="nav-items">
		{#each NAV_ITEMS as { name, href }}
			<li>
				<a {href} on:click={forward}>{name}</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.mobile-tray {
		@apply w-full bg-white fixed z-10 flex items-center justify-center;
		height: calc(100% - 100px);
	}
	.nav-items {
		@apply grid text-center gap-6 font-poppins font-light text-[32px] leading-[48px];
	}
</style>
