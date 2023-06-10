<script>
	import ArticleSummaryItem from './ArticleSummaryItem.svelte';

	const articles = [1, 2, 3, 4, 5, 6];
</script>

<section class="section">
	<div class="section-head">
		<h2>Latest articles</h2>
		<p>See All</p>
	</div>
	<div class="article-summary">
		{#each articles as _, articleIndex}
			<ArticleSummaryItem articleIndex={articleIndex + 1} />
		{/each}
	</div>
</section>
<hr />

<style lang="postcss">
	.section {
		@apply container mx-auto grid mt-20;
	}
	.section-head {
		@apply flex justify-between items-center mb-9 md:mb-20;
	}
	.section-head h2 {
		@apply text-2xl font-medium leading-[49px] md:text-4xl;
	}
	.section-head p {
		@apply text-lg leading-[33px] cursor-pointer md:text-xl;
	}
	.article-summary {
		@apply grid sm:grid-cols-2 gap-7 xl:grid-cols-3 xl:gap-7;
	}
	hr {
		@apply mt-10 lg:mt-20;
	}
</style>
