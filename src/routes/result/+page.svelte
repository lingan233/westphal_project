<script>
    import majors from '../../lib/data/data.json';
	import { onMount } from "svelte";
	let tags = [];
  	let currentMajor;
	onMount(() => {
		let urlParams = new URLSearchParams(window.location.search);

		tags = urlParams.get('data').split(",");
		if (tags.length > 6) {
		currentMajor = 6;
		} else {
			currentMajor = tags.length;
		}
	});

	let allMajors = []
	onMount(async () => {
		const res = await Promise.resolve({ json: () => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] });
		allMajors = await res.json();
	});
  
    function sortMajors(majors) {
      return majors.sort((a, b) => {
        let scoreA = a.content.tag.filter(tag => tags.includes(tag)).length;
        let scoreB = b.content.tag.filter(tag => tags.includes(tag)).length;
        return scoreB - scoreA;
      });
    }

    function getMajors() {
      return sortMajors(majors.majors.filter(major => {
        return major.content.tag.some(tag => tags.includes(tag));
      }));
    }

</script>

<div class="p-8">
    <div class="m-2 text-2xl font-bold text-drexel-dark-blue">
        <h1>Recommend For You</h1>
    </div>
	<div class="relative h-32 sm:h-full rounded-3xl border-2 border-drexel-light-blue my-4">
		<h2 class="absolute top-0 left-4 -translate-y-1/2 bg-white p-1 px-2 text-drexel-dark-blue rounded-full">
			Interests Picked
		</h2>
		<div class="flex max-h-full flex-wrap gap-2 overflow-scroll px-4 py-2 pt-4 align-top">
			{#each tags as tag}
				<button class="tags flex h-fit items-center justify-center gap-1 rounded-full border border-drexel-light-blue py-0.5 px-0.5 leading-4">
					<p class="pl-1 text-drexel-dark-blue">{tag}</p>
				</button>
			{/each}
		</div>
		<a href="/quiz" class="absolute bottom-0 right-4 translate-y-2/3 text-white bg-drexel-light-blue rounded-full py-1 px-4 m-1 text-sm border-4 border-white">
			Search Again
		</a>
	</div>
    <div class="grid grid-cols-2 font-semibold py-4">
		{#each getMajors().slice(0, currentMajor) as major, i}
			<a href="/detail/{major.id}">
				<div class="m-2 relative rounded-lg overflow-hidden text-white">
					{#if i == 0}
						<div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full bg-drexel-light-blue">Best Match</div>
					{:else}
						<div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full outline bg-white outline-drexel-light-blue text-drexel-light-blue">No.{i+1}</div>
					{/if}
					<img src={major.content.cover_img} alt="Avatar" class="object-cover w-full h-48" />
					<div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-4 p-2">{major.content.name}</div>
				</div>
			</a>
		{/each}
    </div>
    <div class="flex justify-center">
        {#if currentMajor < tags.length}
		<!-- need currentMajor = currentMajor + tags.length - currentMajor -->
        <button on:click={() => currentMajor = tags.length}
            id="loadmore"
            type="button"
            class="btn btn-secondary p-2 mb-4">
            Show more
        </button>
        {/if}        
    </div>
</div>
