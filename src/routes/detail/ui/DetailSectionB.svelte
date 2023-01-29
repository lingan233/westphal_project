<script>
	import DetailSectionTitle from '../../../lib/components/DetailSectionTitle.svelte';
	import CoopCompanies from '../../../lib/components/CoopCompanies.svelte';
	import CoopStat from '../../../lib/components/CoopStat.svelte';
	import CoopDescription from '../../../lib/components/CoopDescription.svelte';

	export let section_data;
</script>

<DetailSectionTitle section_title={section_data.name} title_position="right" />
<div class="relative w-full bg-drexel-dark-blue">
	<div>
		{#each section_data.content.companies as company}
			<CoopCompanies company_name={company} />
		{/each}
	</div>

	<div class="absolute top-1/2 -translate-y-1/2">
		<CoopStat
			stat_name={section_data.content.stat_1.name}
			stat={section_data.content.stat_1.stat}
		/>
		<CoopStat
			stat_name={section_data.content.stat_2.name}
			stat={section_data.content.stat_2.stat}
		/>
	</div>
</div>
<div class="mx-auto mt-4 w-[90%]">
	<CoopDescription coop_description={section_data.content.description} />
</div>
