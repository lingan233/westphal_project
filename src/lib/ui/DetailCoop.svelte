<script>
	import DetailSectionTitle from '../components/DetailSectionTitle.svelte';
	import CoopCompanies from '../components/CoopCompanies.svelte';
	import CoopStat from '../components/CoopStat.svelte';
	import CoopDescription from '../components/CoopDescription.svelte';
</script>

<DetailSectionTitle section_title="Coop" title_position="right" />
<div class="relative w-full bg-drexel-dark-blue">
	<div class="absolute right-0 top-0">
		<CoopCompanies company_name="MICROSOFT" />
		<CoopCompanies company_name="SEPTA" />
		<CoopCompanies company_name="VANGUARD" />
		<CoopCompanies company_name="COMCAST" />
		<CoopCompanies company_name="ORACLE" />
	</div>
	<div class="z-10">
		<CoopStat stat_name="Employment Rate" stat="90%" />
		<CoopStat stat_name="Medium Salary" stat="$20/hr" />
	</div>
</div>
<div class="mx-auto mt-4 w-[90%]">
	<CoopDescription
		coop_description="Throughout the program, students conduct real-world research through interviews, card sorting exercises, competitive analysis of products, and surveys."
	/>
</div>
