<script>
	import fejiro from '$lib/assets/portfolio.webp';
	import center from '$lib/assets/center.webp';
	import getquin from '$lib/assets/getquin.webp';
</script>

<section class="portfolio">
	<div class="portfolio-items grid md:grid-cols-2 gap-7 xl:grid-cols-3 gap-4">
		<a href="/" target="_blank" rel="noopener noreferrer">
			<figure>
				<img src={fejiro} alt="" />
				<figcaption>Minimalist Portfolio</figcaption>
			</figure>
		</a>
    <a href="https://www.center.health/" target="_blank" rel="noopener noreferrer">
			<figure>
				<img src={center} alt="" />
				<figcaption>Teams with center</figcaption>
			</figure>
		</a>
    <a href="https://www.getquin.com/" target="_blank" rel="noopener noreferrer">
			<figure>
				<img src={getquin} alt="" />
				<figcaption>Quin-de with getquin</figcaption>
			</figure>
		</a>
	</div>
</section>

<style lang="postcss">
	.portfolio {
		@apply container mx-auto my-20;
	}
	.portfolio-items a {
		@apply h-[400px] sm:h-[418px] bg-[whitesmoke] rounded-lg;
	}
  figure {
    @apply pt-[5%] sm:pt-[30px] md:pt-[65px] h-full relative;
  }
  figcaption {
    @apply absolute left-5 bottom-6 text-lg font-satisfy;
  }
  img {
    margin: auto;
    width: 90%;
    height: auto;
    border-radius: 5px;
    box-shadow: rgba(149,157,165,.2)0 8px 24px;
    transition: transform 300ms ease-out,box-shadow 300ms ease-out;
  }
</style>
