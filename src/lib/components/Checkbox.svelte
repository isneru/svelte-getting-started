<script lang="ts">
	import Check from "$lib/components/icons/Check.svelte"
	import { toggleTodo } from "$lib/stores/todos"
	import type { Todo } from "$lib/types/todos"

	export let todo: Todo
</script>

<button
	disabled={!todo.text}
	on:click={() => toggleTodo(todo.id)}
	class:checked={todo.done}
	class:unchecked={!todo.done}>
	{#if todo.done}
		<Check />
	{/if}
</button>

<style lang="postcss">
	button {
		@apply h-4 w-4 rounded-sm ring-1 disabled:cursor-not-allowed;
	}

	.checked {
		@apply bg-violet-500 text-black ring-violet-600;
	}

	.unchecked {
		@apply bg-zinc-900 text-white ring-zinc-800;
	}
</style>
