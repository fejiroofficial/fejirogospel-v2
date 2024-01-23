<script>
  import Button from '@components/v2/Button.svelte';
	// import Nav from './Nav.svelte';
	// import BurgerMenu from './BurgerMenu.svelte';
	// import MobileNav from './MobileNav.svelte';

	let showMobileNav = false;
</script>

<header class="header">
	<div class="header-pane">
		<a href="/v2">
			<div class="logo">Fejiro Gospel</div>
		</a>
    <nav class="nav">
      <a href="Home">Home</a>
      <a href="Home">Profile</a>
      <a href="Home">Coaching</a>
    </nav>
    <Button variation="secondary">Book Your Session</Button>
	</div>
</header>

<style lang="postcss">
  .header {
    @apply font-inter text-white;
  }
	.header-pane {
		@apply h-[64px] container mx-auto flex justify-between items-center;
	}
	.logo {
		@apply text-[26px] lg:text-sm leading-[21px] font-inter font-semibold;
	}
  .nav {
    @apply flex gap-4 text-xs font-semibold;
  }
</style>
