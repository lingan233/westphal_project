<script>
export let tag;
import cross from '../icon/cross.svg';
</script>

<button
				class="tags border-blue-600 border rounded-full py-1 px-1 leading-4 h-fit flex justify-center items-center gap-1"
			>
				<p class="pl-1">{tag}</p>
				<img src={cross} alt="" />
</button>