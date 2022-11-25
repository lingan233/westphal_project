<script>
    let tags = ["Dance", "Engineering", "Architecture", "Filmmaking", "Research", "Storytelling", "History of Art"]
</script>

<h1 class="p-8 m-2">Pike Your Interests</h1>
<div class="p-8 m-2 border-blue-600 border-2 rounded-2xl">
    <h2>Interests Picked</h2>
</div>
<div>
    {#each tags as tag}
        <button class="border-blue-600 border-2 rounded-full py-1 px-3 m-1">{tag}</button>
    {/each}
</div>
<a href="/result" class="bg-gray-200 float-right rounded-full py-1 px-3 m-1">View Result</a>