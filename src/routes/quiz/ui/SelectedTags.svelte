<script>
	export let selected_tags;
	import PillCloseable from '$lib/components/PillCloseable.svelte';
	console.log(selected_tags);
</script>

<div class="relative h-32 rounded-3xl border-2 border-drexel-light-blue">
	<h2 class="absolute top-0 left-4 -translate-y-1/2 bg-white p-1 px-2 text-drexel-dark-blue">
		Interests Picked
	</h2>
	<div class="flex max-h-full flex-wrap gap-2 overflow-scroll px-4 py-2 pt-4 align-top">
		{#each selected_tags as tag}
			<PillCloseable {tag} />
		{/each}
	</div>
</div>
