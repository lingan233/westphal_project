<script>
	export let bg_color;
	console.log(bg_color);
</script>

<div class="mx-10">
	<div class="relative h-[20rem] w-[16rem]">
		<div class="absolute h-[20rem] w-[16rem]" style="background-color: {bg_color}" />
		<div class="absolute top-6 -left-8 w-full">
			<img alt="Brendan Luu" src="/images/portrait.png" class="w-[14rem]" />
			<p class="relative left-14 top-2 text-white">
				<span class="text-xl font-semibold">Brendan Luu</span><br />
				UX Designer, <span class="font-semibold">Google</span>
			</p>
			<p
				class="relative left-[6.25rem] bottom-[10.75rem] w-fit rotate-[270deg] select-none overflow-hidden whitespace-nowrap text-[2.75rem] font-bold text-white/30"
			>
				Class of 2019
			</p>
		</div>
	</div>
</div>
