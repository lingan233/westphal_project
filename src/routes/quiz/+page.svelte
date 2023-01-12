<script>
	let tags = [
	"3D Animation", "3D Modeling", "Visual Effects", "Engineering", "Architecture", "Prototyping", "Research", "Creative Writing", "History of Art", "Arts & Culture", "Education", "Dance", "Physical Theraphy", "Performing Arts", "Education", "Merchandising", "Fashion", "Retail", "Branding", "Business", "Entrepreneurship", "Motion Capture", "Virtual Reality", "Augmented Reality", "Business", "Arts & Culture", "Performing Arts", "Entrepreneurship", "Theater", "Fashion Design", "Textiles", "Garment Construction", "Fashion Technology", "Storytelling", "Video Editing", "Filmmaking", "Television Production", "Documentary", "Game Design", "Game Development", "Computer Science", "Branding", "Advertising", "Web Design", "Visual Communication", "Graphic Art", "Space Planning", "Decorating", "Prototyping", "Music Production", "Audio Production", "Performing Arts", "Entrepreneurship", "Business", "Music Theory", "Photography", "Photojournalism", "Advertising", "Documentary", "Research", "Prototyping", "Design Thinking", "Entrepreneurship", "Industrial Design", "Creative Writing", "Storytelling", "Filmmaking", "Theater", "Research", "Web Development", "Web Design", "User-Centric Design"
	];

	let selected_tags = ['Storytelling', 'History of Art'];

	import SelectedTags from "./ui/SelectedTags.svelte";
	import Header from "./ui/Header.svelte";
</script>

<main class="h-screen w-screen p-5 flex flex-col justify-evenly">
	<Header/>
	<SelectedTags {selected_tags} />

	<div class="flex flex-wrap justify-center items-center">
		{#each tags.slice(0,20) as tag}
			<button class="tags border-drexel-light-blue border rounded-full py-1 px-3 m-1">{tag}</button>
		{/each}
	</div>
	<a href="/result" class="bg-gray-200 float-right rounded-full py-1 px-3 m-1">View Result</a>
</main>

