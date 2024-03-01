<script>
	import checkBox from '$lib/assets/check-box.svg';
	import switchIcon from '$lib/assets/switch.svg';
	import Button from './Button.svelte';

	export let plan;

	const { name, note, price, perks, cta, variant, tag } = plan;
</script>

<div class="relative">
	<h3 class="headline mb-1">{name}</h3>
	<p class="mb-6 text-[14px]">{note}</p>
	{#if tag}
		<div
			class="text-[12px] font-semibold font-inter bg-blue absolute top-6 right-0 py-3 px-2 rounded-lg"
		>
			{tag}
		</div>
	{/if}

	<div class="flex items-center gap-4 mb-6">
		<p class="headline leading[24px]">
			${price.split('.')[0]}<span class="text-[18px] ml-1 align-super">{price.split('.')[1]}</span>
		</p>
		<div class="text-[12px]">
			<p>per session</p>
			<div class="flex gap-2">
				<p>monthly plan</p>
				<img src={switchIcon} alt="" />
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-2 mb-10">
		{#each perks as perk}
			<div class="flex gap-4">
				<img src={checkBox} alt="" />
				<p class="text-[14px]">{perk}</p>
			</div>
		{/each}
	</div>
	<div class="flex">
		<Button {variant} width="fill">{cta}</Button>
	</div>
</div>

<style lang="postcss">
	.headline {
		@apply text-[32px] font-semibold font-poppins xl:text-[38px];
	}
	p {
		@apply font-inter font-normal;
	}
	img {
		@apply flex self-center;
	}
	.c-wrapper {
		@apply grid grid-cols-1 gap-12 bg-[#02223e] py-20 px-10 -mx-[2rem] sm:-mx-[12rem] lg:mx-0 lg:py-80 lg:grid-cols-2 lg:w-[50vw] xl:px-20;
	}
</style>
