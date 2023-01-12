
<script>
	export let selected_tags;
	import PillCloseable from "../../../lib/components/PillCloseable.svelte";
</script>

<div class="mt-4 mb-2 relative h-28 border-blue-600 border-2 rounded-3xl">
	<h2 class="absolute top-0 left-4 -translate-y-1/2 bg-white p-1 px-2">Interests Picked</h2>
	<div class="flex gap-2 align-top px-4 py-2 pt-4">
		{#each selected_tags as tag}
			<PillCloseable {tag}></PillCloseable>
		{/each}
	</div>
</div>
