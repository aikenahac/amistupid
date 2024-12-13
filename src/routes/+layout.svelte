<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col w-screen h-screen items-center justify-center">
	<div class="max-w-[500px] flex flex-col items-center justify-center">
		{@render children()}
	</div>
</div>
