<script lang="ts">
	import Checkbox from "$lib/components/+Checkbox.svelte"
	import { deleteTodo, updateTodoText } from "$lib/stores/todos"
	import type { Todo } from "$lib/types/todos"

	export let todo: Todo
</script>

<div class="flex items-center gap-4">
	<div class="flex items-center rounded bg-zinc-900 px-3 py-2">
		<input
			placeholder="todo text"
			class="bg-transparent outline-none"
			type="text"
			bind:value={todo.text}
			on:change={() => updateTodoText(todo.id, todo.text)} />
		<Checkbox {todo} />
	</div>
	<button class="rounded bg-red-500 px-3 py-2 text-black" on:click={() => deleteTodo(todo.id)}
		>Delete todo</button>
</div>
