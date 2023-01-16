<script>
	import SelectedTags from './ui/SelectedTags.svelte';
	import Header from './ui/Header.svelte';
	import { generate_random_tags } from '$lib/functions/GenerateRandomTags';
	import { get_all_tags } from '$lib/functions/GetAllTags';
	import TagGeneration from './ui/TagGeneration.svelte';
	import RerollButton from '$lib/components/RerollButton.svelte';
	import { selected_tags } from './store';

	let tags = get_all_tags();
	let remaining_tags = tags;
	$selected_tags = [];
	let displaying_tags;

	displaying_tags = generate_random_tags(remaining_tags, 20);

	function onReroll() {
		displaying_tags = generate_random_tags(remaining_tags, 20);
	}

	function onTagSelect(event) {
		if (tags.includes(event.detail)) {
			$selected_tags = [...$selected_tags, event.detail];
		}
	}
</script>

<main class="flex h-screen w-screen flex-col justify-evenly p-5">
	<Header />

	<SelectedTags selected_tags={$selected_tags} />

	<TagGeneration on:onTagSelectBubble={onTagSelect} tags={displaying_tags} />

	<RerollButton on:onReroll={onReroll} />
	<button
		on:click={() => {
			$selected_tags = [...$selected_tags, 'test'];
		}}>Test</button
	>
</main>
