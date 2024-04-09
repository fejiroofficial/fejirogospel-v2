<script>
	import Button from '@components/v2/Button.svelte';
	import device from '$lib/assets/device.webp';
	import mobileDevice from '$lib/assets/mobile-device.png';
</script>

<section class="container mx-auto grid grid-cols-12 pt-10 py-20 lg:pt-20">
	<div class="web-intro">
		<div class="mobile-media-layout">
			<img src={mobileDevice} alt="computer device">
		</div>
		<h1>Web Design & Development</h1>
		<p>Front-end development with a personal touch.</p>
		<div class="btn-group flex-col md:flex-row">
			<Button width="fill" size="medium" href="#work">View My Work</Button>
			<Button width="fill" size="medium" variant="secondary" href="#philosophy">Learn More</Button>
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
		@apply col-span-12 text-center m-auto font-poppins px-8 text-white lg:col-span-6 lg:text-left;
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
		@apply col-span-6 overflow-hidden hidden lg:block;
	}
	.mobile-media-layout {
		@apply lg:hidden;
	}
	.mobile-media-layout img {
		@apply inline;
	}
	.media-layout img {
		@apply max-w-[140%];
	}
</style>
