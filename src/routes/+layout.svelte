<script lang="ts">
	import Footer from "$lib/components/+Footer.svelte"
	import "../styles/globals.css"
</script>

<slot />
<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-black text-white;
	}
</style>
