<template>
    <div class="flex justify-center items-center space-x-2">
        <input
            class="border rounded-md p-1 flex-grow"
            type="text"
            v-model="newTodo.text"
        />
        <button
            class="rounded-md bg-teal-700 text-white px-2 py-1"
            @click="addTodo(newTodo)"
        >
            Add Todo
        </button>
    </div>
</template>

<script setup>
import { useTodos } from '@/composables/useTodos'

const { newTodo, addTodo } = useTodos()
</script>
