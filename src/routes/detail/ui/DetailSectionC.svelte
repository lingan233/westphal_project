<script>
	import DetailSectionTitle from "../../../lib/components/DetailSectionTitle.svelte";
	import CareersStat from "../../../lib/components/CareersStat.svelte";
	import CareersJobTitle from "../../../lib/components/CareersJobTitle.svelte";
	import Alumni from "../../../lib/components/Alumni.svelte";

	export let section_data;
	export const color = ["#C14C31", "#006298", "#B7BF10", "#FF8F1C"];
</script>

<DetailSectionTitle section_title={section_data.name} title_position="left" />
<div class="mt-5">
	<CareersStat
		stat_description={section_data.content.stat_1.description}
		stat={section_data.content.stat_1.stat}
		position="normal"
	/>
	<CareersStat
		stat_description={section_data.content.stat_2.description}
		stat={section_data.content.stat_2.stat}
		position="reverse"
	/>
</div>
<div class="mt-12">
	{#each section_data.content.job_titles as job_title, i}
		{#if i % 2 === 0}
			<CareersJobTitle job_title={job_title} shadow_position="right" />
		{:else}
			<CareersJobTitle job_title={job_title} shadow_position="left" />
		{/if}
	{/each}
</div>
<div class="mt-10 flex overflow-x-auto overflow-y-hidden p-5">
	{#each section_data.content.alumni as alumnus, i}
		<Alumni bg_color={color[i % 4]} name={alumnus.name} job_title={alumnus.job_title} company={alumnus.company} year={alumnus.class} />
	{/each}
</div>
