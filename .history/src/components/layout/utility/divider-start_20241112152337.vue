<script setup lang="ts">
const props = defineProps<{
    paddingY?: number
    paddingX?: number
}>()
</script>

<template>
    <div
        class="flex h-full items-center gap-3 opacity-60"
        :style="{
            'padding-top': props.paddingY + 'px',
            'padding-bottom': props.paddingY + 'px',
            'padding-left': props.paddingX + 'px',
            'padding-right': props.paddingX + 'px',
        }">
        <slot />

        <div class="h-1/2 grow self-start border-b border-b-neutral/25"></div>
    </div>
</template>

<style scoped></style>
