<script>
	import Plan from './Plan.svelte';

	const PLANS = [
		{
			name: 'Starter',
			note: 'Ideal for hobbyists and new devs',
			price: '49.50',
			perks: ['Weekly Check-ins', 'Project Code Reviews', 'Email Support', 'Access to Resources'],
      cta: 'Start Learning',
      variant: 'secondary',
			href: 'https://buy.stripe.com/eVag059VFaxsaNq6oo'
		},
    {
			name: 'Advanced',
			note: 'For aspiring professionals',
			price: '99.99',
			perks: ['Bi-Weekly Strategy Calls', 'Priority Code Reviews', 'Direct Messaging', 'Portfolio Feature'],
      cta: 'Go Advanced',
      variant: 'primary',
      tag: 'Popular Choice',
			href: 'https://buy.stripe.com/8wM15b3xh20W6xa5kl'
		}
	];
</script>

<section id="plans" class="container mx-auto py-20 lg:py-40 text-white">
	<div class="text-center mb-12">
		<h2>Coaching Plans</h2>
		<p>Choose a plan that fits your learning style and goals.</p>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
		{#each PLANS as plan}
			<Plan {plan} />
		{/each}
	</div>
</section>

<style lang="postcss">
	h2 {
		@apply text-[38px] font-semibold font-poppins mb-2 lg:text-[48px];
	}
	p {
		@apply font-inter font-normal text-[18px] leading-[120%] xl:text-[18px];
	}
	img {
		@apply flex self-center;
	}
	.c-wrapper {
		@apply grid grid-cols-1 gap-12 bg-[#02223e] py-20 px-10 -mx-[2rem] sm:-mx-[12rem] lg:mx-0 lg:py-80 lg:grid-cols-2 lg:w-[50vw] xl:px-20;
	}
</style>
