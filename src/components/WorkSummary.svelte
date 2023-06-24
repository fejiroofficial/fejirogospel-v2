<script>
	import WorkSummaryItem from './WorkSummaryItem.svelte';

	const workHistory = [
		{
			companyTitle: 'LiveLink Technology',
			companySector: 'IT Services and IT Consulting',
			companyBio: `		LiveLink's products lead the market of digital photo kiosks and online photo ordering systems. A
		rapidly growing company of around 80 employees based in Havant. Our instore product range has
		been recently merged into one custom-built unit, and we provide systems for a number of retail
		chains both in the UK and overseas, including ASDA, Jessops, Costco and Walmart.`,
			companyLocation: 'Havant, Hampshire'
		},
		{
			companyTitle: 'Center Health',
			companySector: 'Wellness and Fitness Services',
			companyBio: `Center Health has built the world's first AI diabetes coach, Aria, that helps people across all 50 states lower their blood sugar 2x better than human coaching at 1/2 the cost.`,
			companyLocation: 'San Francisco, California'
		},
		{
			companyTitle: 'getquin',
			companySector: 'Financial Services',
			companyBio: `getquin is a free and secure social investment platform for all things investing. We are empowering people to become better investors. With getquin you can track and analyze all your assets in one place and connect with a global community of investors. It’s quick, easy, and intuitive – the way portfolio tracking should be`,
			companyLocation: 'Berlin, Germany'
		}
	];
</script>

<section class="section">
	<div class="section-head">
		<h2>Experience</h2>
		<a href="/resume.pdf">Resume</a>
	</div>
	{#each workHistory as history}
		<WorkSummaryItem {...history} />
	{/each}
</section>

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
	.section-head a {
		@apply text-lg leading-[33px] cursor-pointer md:text-xl;
	}
</style>
