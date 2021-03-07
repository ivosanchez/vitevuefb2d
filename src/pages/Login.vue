<template>
    <div class="mt-20 p-10 border rounded-md w-3/5 mx-auto bg-gray-50 shadow">
        <div v-if="member">
            <login-form />
            <p class="mt-10 font-light">
                Need an account?
                <span
                    class="ml-1 text-blue-500 cursor-pointer underline"
                    @click="member = false"
                    >Register</span
                >
            </p>
        </div>
        <div v-else>
            <signup-form />
            <p class="mt-10 font-light">
                Already have an account?
                <span
                    class="ml-1 text-blue-500 cursor-pointer underline"
                    @click="member = true"
                    >Login</span
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const member = ref(true)
</script>

<route lang="yaml">
meta:
    noAuth: true
</route>
