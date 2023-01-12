<div class="relative h-28 p-2 pt-4 border-blue-600 border-2 rounded-3xl flex gap-2 align-top">
	<!-- <h2 class="absolute top--1">Interests Picked</h2> -->
	{#each selected_tags as tag}
		<button
			class="tags border-blue-600 border rounded-full py-1 px-1 leading-4 h-fit flex justify-center items-center gap-1"
		>
			<p class="pl-1">{tag}</p>
			<img src={finger_click} alt="" />
		</button>
	{/each}
</div>
