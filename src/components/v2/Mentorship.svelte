<script>
	import benefitImage from '$lib/assets/benefits.png';
</script>

<section class="container mx-auto py-20 grid grid-cols-12">
	<div class="col-span-12 text-center text-white lg:text-left lg:mr-12 lg:col-span-6 xl:mr-32 xl:py-20">
		<h2>Effective <br /> Mentorship</h2>
		<div>
			<div class="card">
				<h4>Personalized Roadmap</h4>
				<p>Your learning path is tailored to your specific career goals and skill level.</p>
			</div>
			<div class="card">
				<h4>Real-world Projects</h4>
				<p>Work on projects that challenge you and build a portfolio that stands out.</p>
			</div>
			<div class="card">
				<h4>Continued Support</h4>
				<p>Even after the coaching, you'll have access to resources and guidance.</p>
			</div>
		</div>
	</div>
	<img src={benefitImage} alt="" class="col-span-12 lg:col-span-6" />
</section>

<style lang="postcss">
	h2 {
		@apply font-semibold font-poppins text-[38px] mb-[40px] lg:text-[48px];
	}
	h4 {
		@apply font-semibold font-poppins text-[22px] mb-4 lg:text-[24px];
	}
	p {
		@apply font-inter font-normal text-[18px] leading-[120%] lg:text-[18px] leading-8;
	}
	.card {
		@apply rounded-3xl p-[24px] bg-[#1F2937] mb-[40px];
	}
  img {
    height: -webkit-fill-available;
    object-fit: cover;
  }
</style>
