<template>
    <div class="relative">
        <div
            class="relative block cursor-pointer z-10"
            @click="showMenu = !showMenu"
        >
            <div class="text-gray-200 text-2xl">
                <i-carbon:user-avatar-filled />
            </div>
        </div>
        <button
            v-if="showMenu"
            @click="showMenu = false"
            class="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"
            tabindex="-1"
        ></button>

        <div
            @click="showMenu = false"
            v-if="showMenu"
            class="absolute right-3 block w-32 mt-1 py-2 rounded-md bg-gray-50 text-gray-800 shadow-lg"
        >
            <div v-if="user">
                <router-link
                    to="/profile"
                    class="block hover:bg-teal-700 hover:text-white px-3 py-1"
                >
                    Profile
                </router-link>
                <nav
                    class="block hover:bg-teal-700 hover:text-white cursor-pointer px-3 py-1"
                    @click="logout"
                >
                    Logout
                </nav>
            </div>

            <div v-else>
                <router-link
                    to="login"
                    class="block hover:bg-teal-700 hover:text-white px-3 py-1"
                >
                    Sign In
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import { useAuth } from '@/composables/firebase/useAuth'

const { user, logout, login } = useAuth()

const showMenu = ref(false)

const handleEscape = e => {
    if (e.key == 'Esc' || e.key == 'Escape') showMenu.value = false
}
document.addEventListener('keydown', handleEscape)

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
})
</script>
