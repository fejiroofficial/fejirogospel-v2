<script>
	// your script goes here
	import andelaLogo from '$lib/assets/andela-logo.svg';
  import qetquinLogo from '$lib/assets/getquin-logo.svg';
  import centerLogo from '$lib/assets/center-logo.avif';
</script>

<section class="bg-white">
	<div class="container mx-auto py-10 lg:py-20 text-center">
		<h2 class="font-poppins text-[18px] mb-6 lg:text-[22px]">Worked with:</h2>
		<div class="flex justify-center gap-8 flex-wrap">
			<img src={andelaLogo} alt="" />
			<img src={centerLogo} alt="" />
			<img src={qetquinLogo} alt="" />
		</div>
	</div>
</section>

<style lang="postcss">
	img {
    height: 50px;
  }
</style>
