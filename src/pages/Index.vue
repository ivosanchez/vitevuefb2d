<template>
    <div>
        <div class="flex space-x-2 items-center">
            <h2 class="my-8 text-teal-700 text-2xl">Todos</h2>
            <button
                class="rounded-full focus:outline-none shadow-md bg-white"
                @click="showForm = !showForm"
            >
                <div class="text-teal-700 text-xl">
                    <i-ic:baseline-add-circle v-if="!showForm" />
                    <i-ic:baseline-add-circle-outline v-else />
                </div>
            </button>
        </div>
        <base-slide-down :showForm="showForm">
            <add-todo />
        </base-slide-down>
        <div v-if="todos.length" class="mt-3 space-y-2 p-2">
            <div v-for="todo in todos" :key="todo.id">
                <div
                    class="bg-white rounded-md flex p-2 items-center shadow-md"
                >
                    <input
                        class="text-teal-700"
                        type="checkbox"
                        v-model="todo.completed"
                        @change="updateTodo(todo.id, todo)"
                    />
                    <div class="ml-6 flex-grow">
                        <h2 class="text-amber-700 text-lg capitalize">
                            {{ todo.text }}
                        </h2>
                        <p class="text-sm text-gray-500">
                            {{ $filters.relativeDate(todo.updatedAt) }} ago
                        </p>
                    </div>

                    <h2
                        class="text-gray-500 cursor-pointer"
                        @click="deleteTodo(todo.id)"
                    >
                        x
                    </h2>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-gray-500 text-center my-10">
                You don't have any todos ;)
            </p>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useTodos } from '@/composables/useTodos'

const profile = inject('profile')

const { newTodo, todos, getUserTodos, updateTodo, deleteTodo } = useTodos()

getUserTodos()

const showForm = ref(false)
</script>
