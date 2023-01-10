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
