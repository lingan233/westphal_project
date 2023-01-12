<script>
	import cross from '$lib/icon/cross.svg';
</script>

<button
	class="tags flex h-fit items-center justify-center gap-1 rounded-full border border-drexel-light-blue py-0.5 px-0.5 leading-4"
>
	<p class="pl-1 text-drexel-dark-blue"><slot /></p>
	<img src={cross} alt="" />
</button>
