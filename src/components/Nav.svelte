<script lang="ts">
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
	import twitter from '$lib/assets/twitter.svg';


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

<nav class="nav">
	<ul class="nav-items">
		{#each NAV_ITEMS as { name }}
			<li>{name}</li>
		{/each}
	</ul>
	<div class="nav-socials">
		<a href="https://twitter.com/fejiroofficial" target="_blank" rel="noopener noreferrer">
			<img src={github} alt="a link to fejiro's github" />
		</a>
		<a href="https://twitter.com/fejiroofficial" target="_blank" rel="noopener noreferrer"
			><img src={linkedin} alt="a link to fejiro's linkedin" />
		</a>

		<a href="https://twitter.com/fejiroofficial" target="_blank" rel="noopener noreferrer">
			<img src={twitter} alt="a link to fejiro's twitter" />
		</a>
	</div>
</nav>

<style lang="postcss">
	.nav {
		@apply hidden flex gap-7 lg:flex;
	}
	.nav-items {
		@apply flex gap-7 font-poppins font-light text-2xl leading-[36px];
	}
	.nav-socials {
		@apply flex items-center gap-4;
	}
</style>
