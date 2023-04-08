import { browser } from "$app/environment"
import type { Todo } from "$lib/types/todos"
import { writable } from "svelte/store"
import { v4 as uuid } from "uuid"

const initialTodos: Todo[] = browser ? JSON.parse(localStorage.getItem("todos-svelte") || "[]") : []

export let todos = writable<Todo[]>(initialTodos)

todos.subscribe(todos => {
	localStorage.setItem("todos-svelte", JSON.stringify(todos))
})

export function addTodo() {
	todos.update(todos => [...todos, { id: uuid(), text: "", done: false }])
}

export function deleteTodo(todoId: string) {
	todos.update(todos => todos.filter(todo => todo.id !== todoId))
}

export function updateTodoText(todoId: string, text: string) {
	todos.update(todos =>
		todos.map(todo => {
			return todo.id === todoId ? { ...todo, text } : todo
		})
	)
}

export function toggleTodo(todoId: string) {
	todos.update(todos =>
		todos.map(todo => {
			return todo.id === todoId ? { ...todo, done: !todo.done } : todo
		})
	)
}
