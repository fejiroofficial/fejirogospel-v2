<script>
	import lummi from '$lib/assets/lummi.png';
</script>

<section class="overflow-hidden">
	<div class="text-white container mx-auto grid grid-cols-12">
		<div
			class="grid gap-4 py-40 lg:py-80 lg:pr-20 justify-items-center text-center col-span-12 mb-6 lg:col-span-6 lg:mb-0"
		>
			<img height="140" width="140" src={lummi} alt="" class="flex self-center mb-4" />
			<div>
				<h2 class="text-[24px] font-semibold font-poppins mb-2 xl:text-[38px]">Development Journey</h2>
				<p>A step-by-step guide to my front-end development process.</p>
			</div>
		</div>
		<div
			class="c-wrapper col-span-12 lg:col-span-6 pl-6 flex flex-col justify-center text-center lg:text-left"
		>
			<div class="c-items">
				<h4>Conceptualize</h4>
				<p>Understanding the project goals</p>
			</div>
			<div class="c-items">
				<h4>Design Interface</h4>
				<p>Crafting the visual elements</p>
			</div>
			<div class="c-items">
				<h4>Build & Code</h4>
				<p>Turning designs into reality</p>
			</div>
			<div class="c-items">
				<h4>Review & Iterate</h4>
				<p>Refining the user experience</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	h4 {
		@apply font-semibold font-poppins text-[18px] mb-2 xl:text-[22px];
	}
	p {
		@apply font-inter font-normal text-[18px] leading-[120%];
	}
	img {
		@apply flex self-center;
	}
	.c-wrapper {
		@apply grid grid-cols-1 gap-12 bg-[#02223e] py-20 px-10 -mx-[2rem] sm:-mx-[12rem] lg:mx-0 lg:py-80 lg:grid-cols-2 lg:w-[50vw] xl:px-20;
	}
</style>
