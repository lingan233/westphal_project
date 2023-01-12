<script>
export let tag;
import cross from '$lib/icon/cross.svg';
</script>

<button class="tags border-drexel-light-blue border rounded-full py-0.5 px-0.5 leading-4 h-fit flex justify-center items-center gap-1">
				<p class="pl-1 text-drexel-dark-blue">{tag}</p>
				<img src={cross} alt="" />
</button>