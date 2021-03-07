<template>
    <nav-bar />
    <div class="px-5 mx-auto md:max-w-4xl">
        <router-view :key="$route.path" />
    </div>
</template>

<script>
import { provide } from 'vue'
import { useProfile } from './composables/firebase/useProfile'
export default {
    setup() {
        const { profile } = useProfile()

        provide('profile', profile)
    },
}
</script>
