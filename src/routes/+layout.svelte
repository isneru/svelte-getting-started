<script lang="ts">
	import Footer from "$lib/components/Footer.svelte"
	import "../styles/globals.css"
</script>

<div class="container mx-auto flex h-screen flex-col items-center justify-center">
	<slot />
</div>
<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-black text-white;
	}
</style>
