<script lang="ts">
	import Todo from "$lib/components/Todo.svelte"
	import { addTodo, todos } from "$lib/stores/todos"
	import type { Snapshot } from "./$types"

	export const snapshot: Snapshot = {
		capture: () => $todos,
		restore: value => todos.set(value)
	}
</script>

<div class="flex flex-col gap-3 font-semibold">
	{#each $todos as todo}
		<Todo {todo} />
	{/each}
	<button class="w-full rounded bg-emerald-500 px-3 py-2 text-black" on:click={addTodo}
		>Add todo</button>
</div>
