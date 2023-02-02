<script>
    import majors from '../../lib/data/data.json';
	import { onMount } from "svelte";
	let tags = [];
	let matchedMajors = [];
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
    <div class="grid grid-cols-2 font-semibold">
		{#each getMajors().slice(0, currentMajor) as major, i}
			<a href="/detail/{major.id}">
				<div class="m-2 relative rounded-lg overflow-hidden text-white">
					{#if i == 0}
						<div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full bg-drexel-light-blue">Best Match</div>
					{:else}
						<div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full outline bg-white outline-drexel-light-blue text-drexel-light-blue">No.{i+1}</div>
					{/if}
					<img src="https://via.placeholder.com/200x250" alt="Avatar" class="object-cover w-full h-full" />
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
