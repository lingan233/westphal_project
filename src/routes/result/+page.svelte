<script>
	import { onMount } from "svelte";
	let data = []
	
	onMount(async () => {
    const res = await Promise.resolve({ json: () => [1,2,3,4,5,6,7,8,9,10,11,12] });
    data = await res.json();
  });
	
	 let currentItems = 6;

     let itemNames = ["User Experience & Interaction Design (BS)", "Graphic Design (BS)", "Product Design (BS)", "Design & Merchandising (BS)", "Animation & Visual Effects (BS)", "Architecture (BS)", "Dance (BS)", "Digital Media & Virtual Production (BS)", "Photography", "Music Industry (BS)", "Fashion Design (BS)", "Film & Television (BS)"];
</script>

<div class="p-8">
    <div class="m-2 text-4xl">
        <h1>Recommend For You</h1>
    </div>
    <div class="m-2">
        <h2>Interests Picked</h2>
    </div>
    <div class="grid grid-cols-2 font-semibold">
        {#each data.slice(0, currentItems) as item, i}
            {#if item == 1}
            <div class="m-2 relative rounded-lg overflow-hidden text-white">
                <div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full bg-drexel-light-blue">Best Match</div>
                <img src="https://via.placeholder.com/200x250" alt="Avatar" class="object-cover w-full h-full" />
                <div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-4 p-2">{itemNames[i]}</div>
            </div>
            {:else}
            <div class="m-2 relative rounded-lg overflow-hidden text-white">
                <div class="py-1 px-4 m-1 text-xs absolute top-0 rounded-full outline bg-white outline-drexel-light-blue text-drexel-light-blue">No.{item}</div>
                <img src="https://via.placeholder.com/200x250" alt="Avatar" class="object-cover w-full h-full" />
                <div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-black/50 leading-4 p-2">{itemNames[i]}</div>
            </div>
            {/if}
        {/each}
    </div>
    <div class="flex justify-center">
        {#if currentItems < data.length}
        <button on:click={() => currentItems = currentItems + 6}
            id="loadmore"
            type="button"
            class="btn btn-secondary">
            Show more
        </button>
        {/if}        
    </div>
</div>
