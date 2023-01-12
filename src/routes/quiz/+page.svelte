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

	import finger_click from '$lib/images/cross.svg';
</script>

<main class="p-5">
	<div>
		<div>
			<h1 class="text-2xl font-bold">Pick Your Interests</h1>
			<p class="font-light text-base">Choose as many tags as you like!</p>
		</div>
		<button>Next</button>
	</div>



	<div>
		{#each tags as tag}
			<button class="tags border-blue-600 border rounded-full py-1 px-3 m-1">{tag}</button>
		{/each}
	</div>
	<a href="/result" class="bg-gray-200 float-right rounded-full py-1 px-3 m-1">View Result</a>
</main>

<style>
</style>
