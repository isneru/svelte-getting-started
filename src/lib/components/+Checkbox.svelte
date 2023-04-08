<script lang="ts">
	import { todos, type Todo } from "$lib/hooks.client.ts"

	export let todo: Todo

	function toggleTodo() {
		todos.update(todos => {
			const index = todos.findIndex(t => t.id === todo.id)
			todos[index].done = !todos[index].done
			return todos
		})
	}
</script>

<button
	disabled={!todo.text}
	on:click={toggleTodo}
	class:checked={todo.done}
	class:unchecked={!todo.done}>
	{#if todo.done}
		<svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
				fill="currentColor"
				fill-rule="evenodd"
				clip-rule="evenodd" />
		</svg>
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
