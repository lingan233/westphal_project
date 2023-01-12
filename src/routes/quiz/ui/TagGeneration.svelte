<script>
	import Pill from '$lib/components/Pill.svelte';
	export let tags;
</script>

<div class="flex flex-wrap items-center justify-center h-1/2">
	{#each tags as tag}
		<Pill>{tag}</Pill>
	{/each}
</div>
