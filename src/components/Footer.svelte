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
			href: '/about'
		},
		{
			name: 'Resume',
			href: '/resume.pdf'
		}
	];
</script>

<footer class="footer">
	<div class="nav-socials">
		<a href="https://github.com/fejiroofficial" target="_blank" rel="noopener noreferrer">
			<img src={github} alt="a link to fejiro's github" />
		</a>
		<a href="https://www.linkedin.com/in/fejiroofficial/" target="_blank" rel="noopener noreferrer"
			><img src={linkedin} alt="a link to fejiro's linkedin" />
		</a>

		<a href="https://twitter.com/fejiroofficial" target="_blank" rel="noopener noreferrer">
			<img src={twitter} alt="a link to fejiro's twitter" />
		</a>
	</div>
	<nav>
		<ul class="nav-items">
			{#each NAV_ITEMS as { name, href }}
				<li>
					<a {href}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<p class="copyright">©2023 Fejiro Gospel</p>
</footer>

<style lang="postcss">
	.footer {
		@apply container py-24 mx-auto flex flex-col items-center gap-y-6 md:py-32 lg:gap-y-8;
	}
	.nav-items {
		@apply flex gap-4 font-poppins font-light text-lg leading-[36px] md:text-2xl md:gap-7 lg:text-[32px];
	}
	.nav-items li {
		@apply cursor-pointer;
	}
	.nav-socials {
		@apply flex items-center gap-4 xl:gap-7;
	}
	.nav-socials img {
		@apply xl:scale-150;
	}
	.copyright {
		@apply text-lg font-light;
	}
</style>
