<script>
	import cross from '$lib/icon/cross.svg';
	import { createEventDispatcher } from 'svelte';

	export let tag;

	let dispatch = createEventDispatcher;

	function onClick(){
		dispatch("onTagClosed", tag)
	}
</script>

<button on:click={onClick}
	class="tags flex h-fit items-center justify-center gap-1 rounded-full border border-drexel-light-blue py-0.5 px-0.5 leading-4"
>
	<p class="pl-1 text-drexel-dark-blue">{tag}</p>
	<img src={cross} alt="" />
</button>
