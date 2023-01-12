<script>
	let tags = [
		'Dance',
		'Engineering',
		'Architecture',
		'Filmmaking',
		'Research',
		'Storytelling',
		'History of Art'
	];

	let selected_tags = ['Storytelling', 'History of Art'];

	import SelectedTags from "./ui/SelectedTags.svelte";

</script>

<main class="p-5">


	<SelectedTags {selected_tags} />

	<div>
		{#each tags as tag}
			<button class="tags border-blue-600 border rounded-full py-1 px-3 m-1">{tag}</button>
		{/each}
	</div>
	<a href="/result" class="bg-gray-200 float-right rounded-full py-1 px-3 m-1">View Result</a>
</main>

