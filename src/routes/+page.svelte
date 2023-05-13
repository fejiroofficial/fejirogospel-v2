<script>
	import displayImage from '$lib/assets/display-image.webp';
</script>

<section class="container mx-auto grid mt-8">
	<img class="display-image" alt="The project logo" src={displayImage} />
	<div class="web-intro">
		<h1>I am Fejiro Gospel</h1>
		<p>Lead front-end developer based in the united kingdom</p>
	</div>
</section>
<hr />
<section class="container mx-auto grid mt-8" />

<style lang="postcss">
	.display-image {
		@apply min-w-[15rem] min-h-[15rem] md:h-[554px] md:w-[702px] justify-self-center;
	}
	.web-intro {
		@apply font-poppins mt-[32px] text-center;
	}
	.web-intro h1 {
		@apply font-medium text-[32px] leading-[48px] md:text-[48px] md:leading-[64px] lg:text-[82px] lg:leading-[123px];
	}
	.web-intro p {
		@apply font-light text-[16px] leading-[24px] md:text-[20px] md:leading-[32px] lg:text-[32px] lg:leading-[48px];
	}
	hr {
		@apply mt-10 lg:mt-20;
	}
</style>
