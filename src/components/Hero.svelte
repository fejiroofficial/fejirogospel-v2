<script>
	import Button from '@components/v2/Button.svelte';
	import device from '$lib/assets/device.webp'
</script>

<section class="container mx-auto grid grid-cols-12 py-20">
	<div class="web-intro">
		<h1>Crafting Digital Experiences</h1>
		<p>Front-end development with a personal touch.</p>
		<div class="btn-group">
			<Button width="fill" size="medium">View My Work</Button>
			<Button width="fill" size="medium" variant="secondary">Learn More</Button>
		</div>
	</div>
	<div class="media-layout">
		<img src={device} alt="computer device">
	</div>
</section>
<hr />

<style lang="postcss">
	.display-image {
		@apply min-w-[15rem] min-h-[15rem] md:h-[554px] md:w-[702px] justify-self-center;
	}
	.web-intro {
		@apply col-span-6 m-auto font-poppins px-8 text-white;
	}
	.web-intro h1 {
		@apply font-semibold mb-4 text-[32px] leading-[48px] md:text-[48px] md:leading-[64px] lg:text-[67px] lg:leading-[104%];
	}
	.web-intro p {
		@apply text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] lg:text-[22px] lg:leading-[130%];
	}
	.btn-group {
		@apply mt-10 flex gap-4;
	}
	.media-layout {
		@apply col-span-6 overflow-hidden;
	}
	.media-layout img {
		@apply max-w-[140%]
	}
</style>
