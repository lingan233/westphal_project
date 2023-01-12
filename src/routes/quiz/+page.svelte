<script>
	import SelectedTags from './ui/SelectedTags.svelte';
	import Header from './ui/Header.svelte';
	import { generate_random_tags } from '$lib/functions/GenerateRandomTags';
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import TagGeneration from './ui/TagGeneration.svelte';
	import RerollButton from '$lib/components/RerollButton.svelte';

	let tags = get_all_tags();
	let selected_tags = [];
	let displaying_tags;
	let remaining_tags = tags;

	displaying_tags = generate_random_tags(tags, 20);
	console.log(displaying_tags);

	function onReroll() {
		displaying_tags = generate_random_tags(tags, 20);
		console.log(displaying_tags);
	}
</script>

<main class="flex h-screen w-screen flex-col justify-evenly p-5">
	<Header />

	<SelectedTags {selected_tags} />

	<TagGeneration tags={displaying_tags} />

	<RerollButton on:onReroll={onReroll} />
</main>
