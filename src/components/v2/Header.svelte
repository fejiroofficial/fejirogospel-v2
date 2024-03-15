<script>
  import Button from '@components/v2/Button.svelte';
  
</script>

<header class="header">
	<div class="header-pane">
		<a href="/">
			<div class="logo">Fejiro Gospel</div>
		</a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/coaching#philosophy">Profile</a>
      <a href="/coaching#plans">Coaching</a>
    </nav>
    <Button variant="secondary" href="/coaching#plans">Book Your Session</Button>
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
		@apply text-sm leading-[21px] font-inter font-semibold;
	}
  .nav {
    @apply hidden flex gap-4 text-xs font-semibold md:flex;
  }
</style>
