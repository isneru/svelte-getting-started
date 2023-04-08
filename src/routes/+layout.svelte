<script lang="ts">
	import "../styles/globals.css"
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-black text-white;
	}
</style>
