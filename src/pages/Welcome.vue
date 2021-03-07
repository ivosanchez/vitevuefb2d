<template>
    <h2 class="tracking-wide mt-64 text-center text-teal-700 text-3xl">
        Welcome to Vite Starter
    </h2>
    <div class="text-center mt-10">
        <router-link to="login">
            <button class="px-3 py-2 bg-teal-700 text-white shadow rounded-md">
                Login to get started!
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    setup() {},
}
</script>

<route lang="yaml">
meta:
    noAuth: true
</route>
