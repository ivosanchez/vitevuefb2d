<template>
    <label class="block">
        <span class="text-gray-700">{{ label }}</span>
        <input
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-700 focus:ring focus:ring-teal-600 focus:ring-opacity-50"
        />
        <p class="text-sm text-red-500">{{ error }}</p>
    </label>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
        error: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        inputType: {
            type: String,
            default: 'text',
        },
    },
}
</script>
