<script>
	import DetailSectionTitle from '../components/DetailSectionTitle.svelte';
	import CareersStat from '../components/CareersStat.svelte';
	import CareersJobTitle from '../components/CareersJobTitle.svelte';
	import Alumni from '../components/Alumni.svelte';
</script>

<DetailSectionTitle section_title="Careers" title_position="left" />
<div class="mt-10">
	<CareersStat
		stat_description="Employed at a full-time job within one year of graduation"
		stat="99%"
		position="normal"
	/>
	<CareersStat
		stat_description="Average salary within one year of graduation"
		stat="78k"
		position="reverse"
	/>
</div>
<div class="mt-10">
	<CareersJobTitle job_title="UI DESIGNER" shadow_position="left" />
	<CareersJobTitle job_title="UX DESIGNER" shadow_position="right" />
	<CareersJobTitle job_title="WEB DEVELOPER" shadow_position="left" />
	<CareersJobTitle job_title="USER RESEARCHER" shadow_position="right" />
	<CareersJobTitle job_title="IX DESIGNER" shadow_position="left" />
</div>
<div class="mt-10">
	<Alumni bg_color="#C14C31" />
</div>
