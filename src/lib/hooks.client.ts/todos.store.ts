import { writable } from "svelte/store"
import { v4 as uuid } from "uuid"

export type Todo = {
	id: string
	text: string
	done: boolean
}

export let todos = writable<Todo[]>([
	{ id: uuid(), text: "Learn Svelte", done: false },
	{ id: uuid(), text: "Learn SvelteKit", done: false }
])

export function addTodo() {
	todos.update(todos => [...todos, { id: uuid(), text: "", done: false }])
}

export function deleteTodo(todoId: string) {
	todos.update(todos => todos.filter(todo => todo.id !== todoId))
}
