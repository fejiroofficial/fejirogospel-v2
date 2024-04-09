<script>
	import '../../app.css';
  import FormData from './form';


</script>

<svelte:head>
	<script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
</svelte:head>

<section class="container mx-auto py-20 flex justify-center">{@html FormData}</section>
