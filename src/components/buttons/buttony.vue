<script setup lang="ts">
const props = defineProps<{
    join?: boolean
}>()
</script>

<template><button :class="{ 'join-item': props.join }"
    class="btn relative btn-sm active:button-neutral active:border-neutral  active:text-neutral-content active:hover:bg-neutral/80 transition-all duration-300">
    <slot />
</button></template>

<style scoped></style>