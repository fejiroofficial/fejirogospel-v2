<script>
  import displayImage from '$lib/assets/display-image.jpg';
</script>

<section class="bg-pure-white pt-0 py-20">
  <div class="container mx-auto grid grid-cols-12 gap-6">
    <img class="col-span-12 mb-6 lg:col-span-6 lg:mb-0" src={displayImage} alt="">
    <div class="col-span-12 lg:col-span-6 flex flex-col justify-center text-center lg:pl-6 lg:text-left">
      <h2 class="text-blue">My Philosophy</h2>
      <p>I believe in empowering clients with the knowledge to maintain and expand their digital presence.</p>
    </div>
  </div>
</section>

<style lang="postcss">
  h2 {
    @apply font-semibold font-poppins text-[18px] mb-2 lg:text-[28px];
  }
  p {
    @apply font-inter font-normal text-[24px] leading-[120%] lg:text-[38px];
  }
  img {
    @apply h-[27rem] lg:h-[40rem] flex justify-self-center rounded-3xl;
  }
</style>
