<script>
	// your script goes here
	import Button from './Button.svelte';
</script>

<section class="container mx-auto py-10 lg:py-20">
	<div class="card">
		<h2>Elevate Your Code</h2>
		<p>Unleash your potential with guided front-end development coaching.</p>
		<div class="text-white mt-8">
			<Button size="large">Get Started</Button>
		</div>
		
	</div>
</section>

<!-- markup (zero or more items) goes here -->

<style lang="postcss">
	.card {
		@apply rounded-3xl bg-white py-[64px] px-[32px] text-center;
	}
	h2 {
		@apply font-semibold font-poppins text-[38px] mb-2 lg:text-[48px];
	}
	p {
		@apply font-inter font-normal text-[18px] leading-[120%] lg:text-[22px] leading-8;
	}
	/* your styles go here */
</style>
