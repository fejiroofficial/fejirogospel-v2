<script>
  // your script goes here
  import displayImage from '$lib/assets/display-image.jpg';
</script>

<section class="bg-pure-white pt-0 py-20 lg:pt-20">
  <div class="container mx-auto grid grid-cols-12 ">
    <img class="col-span-12 mb-6 lg:col-span-6 lg:mb-0" src={displayImage} alt="">
    <div class="col-span-12 lg:col-span-6 pl-6 flex flex-col justify-center text-center lg:text-left">
      <h2 class="text-blue">My Philosophy</h2>
      <p>I believe in empowering clients with the knowledge to maintain and expand their digital presence.</p>
    </div>
  </div>
</section>

<style lang="postcss">
  h2 {
    @apply font-semibold font-poppins text-[28px] mb-2;
  }
  p {
    @apply font-inter font-normal text-[38px] leading-[120%];
  }
  img {
    @apply h-[40rem] flex justify-self-center rounded-3xl;
  }
</style>
