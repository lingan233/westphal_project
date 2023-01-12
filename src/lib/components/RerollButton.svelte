<script>
	import ReRollDice from '$lib/icon/ReRollDice.svg';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
	function onReroll() {
		dispatch('onReroll');
  }
</script>

<button
	on:click={onReroll}
	class="mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-drexel-light-blue px-4 py-2 text-white"
>
	<img src={ReRollDice} alt="Reroll" />
	Show me some new tags
</button>
