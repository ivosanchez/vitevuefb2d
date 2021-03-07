<template>
    <h2 class="text-center text-2xl text-amber-700 mb-8">Sign In</h2>
    <form class="space-y-5" @submit.prevent="loginByEmail">
        <base-input type="email" placeholder="Email" v-model="email" />
        <base-input type="password" placeholder="Password" v-model="password" />
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <button class="border rounded-md px-3 py-1 bg-teal-700 text-white">
            Login
        </button>
    </form>
    <div class="flex items-center my-4">
        <div class="border-b-2 w-1/2"></div>
        <p class="text-gray-500 px-3">OR</p>
        <div class="border-b-2 w-1/2"></div>
    </div>
    <div class="space-y-3 w-1/2 mx-auto">
        <button
            @click="googleLogin"
            class="flex items-center space-x-2 px-3 py-2 rounded-md bg-white w-52"
        >
            <i-logos:google-icon />
            <span class="text-gray-600 text-lg">Login With Google</span>
        </button>
        <button
            @click="AppleLogin"
            class="flex items-center space-x-2 px-3 py-2 rounded-md bg-white w-52"
        >
            <i-logos:apple class="text-gray-700" />
            <span class="text-gray-600 text-lg">Login With Apple</span>
        </button>
        <button
            @click="githubLogin"
            class="flex items-center space-x-2 px-3 py-2 rounded-md bg-white w-52"
        >
            <i-logos:github-icon />
            <span class="text-gray-600 text-lg">Login With GitHub</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/firebase/useAuth'
const { emailLogin, googleLogin, githubLogin, appleLogin, error } = useAuth()
const email = ref('')
const password = ref('')

const loginByEmail = async () => {
    await emailLogin(email.value, password.value)
}
</script>
