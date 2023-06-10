<script>
	export let companyTitle = '';
	export let companySector = '';
	export let companyBio = '';
	export let companyLocation = '';
</script>

<div class="summary">
	<h3 class="title">{companyTitle}</h3>
	<p class="sector">{companySector}</p>
	<p class="location">{companyLocation}</p>
	<p class="bio">
		{companyBio}
	</p>
</div>
<hr class="my-14" />

<style lang="postcss">
	.summary {
		@apply grid gap-y-1 md:grid-cols-2 md:gap-x-6 md:gap-y-12;
	}
	.title {
		@apply row-start-1 font-medium text-lg md:col-start-1 md:text-[26px];
	}
	.sector {
@apply row-start-2 text-gray-700 text-sm md:col-start-1 ;
	}
	.location {
@apply row-start-3 text-xs text-gray-700 md:col-start-2 md:row-start-2 md:text-sm ;
	}
	.bio {
		@apply mt-8 text-sm md:mt-0 md:col-start-2 ;
	}
</style>
