<script lang="ts">
	import Todo from "$lib/components/+Todo.svelte"
	import Spinner from "$lib/components/icons/+Spinner.svelte"
	import { addTodo, todos } from "$lib/stores/todos"
	import { onDestroy, onMount } from "svelte"
	import { get } from "svelte/store"

	onMount(() => {
		const todosValue = JSON.parse(localStorage.getItem("todos-svelte") ?? "[]")
		todos.set(todosValue)
	})

	onDestroy(() => {
		localStorage.setItem("todos-svelte", JSON.stringify(get(todos)))
	})
</script>

<div class="container mx-auto flex h-screen flex-col items-center justify-center">
	<div class="flex flex-col gap-3 font-semibold">
		{#if !$todos.length}
			<span class="flex items-center gap-5 text-xl font-bold"><Spinner /> Loading</span>
		{:else}
			{#each $todos as todo}
				<Todo {todo} />
			{/each}
			<button class="w-full rounded bg-emerald-500 px-3 py-2 text-black" on:click={addTodo}
				>Add todo</button>
		{/if}
	</div>
</div>
