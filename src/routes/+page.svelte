<script lang="ts">
	import Todo from "$lib/components/+Todo.svelte"
	import { addTodo, todos } from "$lib/hooks.client.ts"
</script>

<div class="container mx-auto flex h-screen flex-col items-center justify-center">
	<div class="flex flex-col gap-3 font-semibold">
		{#each $todos as todo}
			<Todo {todo} />
		{/each}
		<button class="w-full rounded bg-emerald-500 py-2 text-black" on:click={addTodo}
			>Add todo</button>
	</div>
</div>
