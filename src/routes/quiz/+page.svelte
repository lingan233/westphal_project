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

	import SelectedTags from '../../lib/components/SelectedTags.svelte';
</script>

<main class="p-5">
	<div>
		<div>
			<h1 class="text-2xl font-bold">Pick Your Interests</h1>
			<p class="font-light text-base">Choose as many tags as you like!</p>
		</div>
		<button>Next</button>
	</div>

	<SelectedTags {selected_tags} />

	<div>
		{#each tags as tag}
			<button class="tags border-blue-600 border rounded-full py-1 px-3 m-1">{tag}</button>
		{/each}
	</div>
	<a href="/result" class="bg-gray-200 float-right rounded-full py-1 px-3 m-1">View Result</a>
</main>

<style>
</style>
=======
</script>

<h1 class="m-2 p-8">Pike Your Interests</h1>
<div class="m-2 rounded-2xl border-2 border-blue-600 p-8">
	<h2>Interests Picked</h2>
</div>
<div>
	{#each tags as tag}
		<button class="m-1 rounded-full border-2 border-blue-600 py-1 px-3">{tag}</button>
	{/each}
</div>
<a href="/result" class="float-right m-1 rounded-full bg-gray-200 py-1 px-3">View Result</a>
>>>>>>> 2ca9654307e3fc1e47725755a6dd70d5843ad176
