<template>
    <div class="w-full">
        <div
            ref="list"
            class="space-y-2 overflow-hidden transition-all duration-500"
            :style="{ height: listHeight + 'px' }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['showForm'],
    computed: {
        listHeight() {
            return this.showForm ? this.$refs.list.scrollHeight : 0
        },
    },
}
</script>
