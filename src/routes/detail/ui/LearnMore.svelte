<script>
	export let section_data;
</script>

<div class="flex">
	<div class="relative w-full bg-drexel-light-blue">
		<div class="absolute top-[40%] right-10 my-auto custom:right-auto">
			<svg
				width="320"
				height="60"
				viewBox="0 0 693 131"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0V131H550.42L608 65.5L550.42 0H0Z" fill="#6CACE4" />
				<path d="M636.158 0H585L641.842 65.5L585 131H636.158L693 65.5L636.158 0Z" fill="#6CACE4" />
			</svg>
		</div>
		<p class="absolute flex h-full items-center p-5 text-4xl font-semibold text-white">
			Interested in {section_data.id}
		</p>
	</div>

	<div class="w-36 shrink-0 bg-drexel-light-green px-5 pt-5 pb-3">
		<img alt="QR Code" src={section_data.content.qr_code} />
		<p class="pt-3 text-center text-lg text-white">SCAN ME</p>
	</div>
</div>
