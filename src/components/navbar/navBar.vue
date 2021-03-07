<template>
    <header
        class="w-full h-16 bg-teal-700 text-white px-5 flex items-center justify-between"
    >
        <router-link to="/">
            <h2 class="text-xl cursor-pointer">
                Vite<span class="text-amber-500">Starter</span>
            </h2>
        </router-link>

        <nav-menu />
    </header>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/firebase/useAuth'

const { user } = useAuth()
const router = useRouter()

watch(user, () => {
    if (user.value) {
        router.push('/')
    } else {
        router.push('login')
    }
})
</script>
