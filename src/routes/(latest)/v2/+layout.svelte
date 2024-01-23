<script>
	import Header from '@components/v2/Header.svelte';
	import '../../../app.css';
</script>

<div class="layout">
	<Header />
	<slot />
</div>

<style>
  .layout {
    background-color: black;
  }
</style>
