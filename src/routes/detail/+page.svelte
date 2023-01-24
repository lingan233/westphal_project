<script>
	import DetailOverview from "./ui/DetailOverview.svelte";
	import DetailSectionA from "./ui/DetailSectionA.svelte";
	import DetailSectionB from "./ui/DetailSectionB.svelte";
	import DetailSectionC from "./ui/DetailSectionC.svelte";
	import LearnMore from "./ui/LearnMore.svelte";
	import Footer from "./ui/Footer.svelte";
</script>

<div>
	<DetailOverview 
		major_name="A"
		major_description="The User Experience and Interaction Design (UXID) degree gives you the tools to not only understand technology, but also the human principles underpinning it."
		major_image="https://www.arts.ac.uk/__data/assets/image/0003/1000003/uxid.jpg"
	/>
</div>

<div class="mt-8">
	<DetailSectionA />
</div>

<div class="mt-8">
	<DetailSectionB />
</div>

<div class="mt-8">
	<DetailSectionC />
</div>

<div class="mt-8">
	<LearnMore />
</div>

<div>
	<Footer />
</div>