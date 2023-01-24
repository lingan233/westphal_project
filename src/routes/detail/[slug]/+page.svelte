<script>
	import DetailOverview from "../ui/DetailOverview.svelte";
	import DetailSectionA from "../ui/DetailSectionA.svelte";
	import DetailSectionB from "../ui/DetailSectionB.svelte";
	import DetailSectionC from "../ui/DetailSectionC.svelte";
	import LearnMore from "../ui/LearnMore.svelte";
	import Footer from "../ui/Footer.svelte";

	export let data;
</script>

<div>
	<DetailOverview 
		section_data={data}
	/>
</div>

<div class="mt-8">
	<DetailSectionA
		section_data={data.content.section_a} />
</div>

<div class="mt-8">
	<DetailSectionB 
		section_data={data.content.section_b}/>
</div>

<div class="mt-8">
	<DetailSectionC 
		section_data={data.content.section_c}
	/>
</div>

<div class="mt-8">
	<LearnMore section_data={data} />
</div>

<div>
	<Footer />
</div>