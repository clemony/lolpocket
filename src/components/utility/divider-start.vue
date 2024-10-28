<script setup lang="ts">
const props = defineProps<{
    paddingY?: number
    paddingX?: number
}>()
</script>

<template>
<div class='flex items-center gap-3  opacity-60' :style="{
    'padding-top': props.paddingY + 'px',
    'padding-bottom': props.paddingY + 'px',
    'padding-left': props.paddingX + 'px',
    'padding-right': props.paddingX + 'px',
}">

    <slot />

    <span class='h-1/2 border-b self-start grow border-b-neutral/25'></span>
</div>
</template>

<style scoped></style>