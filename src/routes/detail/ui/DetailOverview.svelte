<script>
	import BackArrow from "../../../lib/icon/BackArrow.svelte";
	import MajorOverview from "../../../lib/components/MajorOverview.svelte";
	import SwipeDown from "../../../lib/components/SwipeDown.svelte";
</script>

<div
	class="h-screen w-full bg-[linear-gradient(to_bottom,#00000080,#00000000,#000000CC),url('images/img.png')] bg-center"
>
	<img
		alt="logo"
		class="relative right-[10%] float-right w-2/5 max-w-[200px]"
		src="/images/logo.png"
	/>
	<div class="relative top-[10%]">
		<BackArrow />
	</div>
	<div class="absolute bottom-[20%] w-[90%] bg-drexel-dark-blue p-8">
		<MajorOverview
			major_name="User Experience and Interaction Design (BS)"
			major_description="The User Experience and Interaction Design (UXID) degree gives you the tools to not only understand technology, but also the human principles underpinning it."
		/>
	</div>
	<div class="absolute bottom-[5%] left-0 right-0 mx-auto">
		<SwipeDown />
	</div>
</div>
