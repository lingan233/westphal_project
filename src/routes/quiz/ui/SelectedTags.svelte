<script>
	export let selected_tags;
	import PillCloseable from '$lib/components/PillCloseable.svelte';
</script>

<div class="relative mt-4 mb-2 h-28 rounded-3xl border-2 border-drexel-light-blue">
	<h2 class="absolute top-0 left-4 -translate-y-1/2 bg-white p-1 px-2 text-drexel-dark-blue">
		Interests Picked
	</h2>
	<div class="flex gap-2 px-4 py-2 pt-4 align-top">
		{#each selected_tags as tag}
			<PillCloseable>{tag}</PillCloseable>
		{/each}
	</div>
</div>
