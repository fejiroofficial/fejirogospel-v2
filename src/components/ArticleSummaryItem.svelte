<script>
	import book from '$lib/assets/book.svg';

	export let articleIndex = 1;
</script>

<div class="summary">
	<p class="numeral">{articleIndex}</p>
	<h4>My Experience using Polywork</h4>
	<div class="summary-footer">
		<p class="date">Apr 13, 2023</p>
		<div class="read">
			<img src={book} alt="read time" />
			<p>12 min read</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.summary {
		@apply relative pl-7 pt-9;
	}
	.numeral {
		@apply text-[38px] text-slate-300 font-extrabold absolute top-0 left-0;
	}
	.summary h4 {
		@apply text-lg md:text-2xl font-semibold;
	}
	.summary-footer {
		@apply flex gap-4 mt-4 text-slate-500 md:text-lg;
	}
	.read {
		@apply flex gap-1 items-center;
	}
	.read img {
		@apply mt-1;
	}
</style>
