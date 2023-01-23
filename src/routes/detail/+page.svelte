<script>
	import DetailOverview from "./ui/DetailOverview.svelte";
	import DetailFundamentals from "./ui/DetailFundamentals.svelte";
	import DetailCoop from "./ui/DetailCoop.svelte";
	import DetailCareers from "./ui/DetailCareers.svelte";
	import LearnMore from "./ui/LearnMore.svelte";
	import Footer from "./ui/Footer.svelte";
</script>

<div>
	<DetailOverview />
</div>

<div class="mt-8">
	<DetailFundamentals />
</div>

<div class="mt-8">
	<DetailCoop />
</div>

<div class="mt-8">
	<DetailCareers />
</div>

<div class="mt-8">
	<LearnMore />
</div>

<div>
	<Footer />
</div>