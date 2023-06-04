<script>
	export let companyTitle = '';
	export let companySector = '';
	export let companyBio = '';
	export let companyLocation = '';
</script>

<div class="grid grid-cols-2 gap-x-6 gap-y-12">
	<h3 class="col-start-1 font-medium text-[26px]">{companyTitle}</h3>
	<p class="col-start-1 row-start-2 text-sm text-gray-700">{companySector}</p>
	<p class="col-start-2 text-sm">
		{companyBio}
	</p>
	<p class="col-start-2 row-start-2 text-sm text-gray-700">{companyLocation}</p>
</div>
<hr class="my-14" />
