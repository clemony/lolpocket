<script setup lang="ts">
import { cn } from '@/lib/utils'
const props = defineProps<{
    paddingY?: number
    paddingX?: number
}>()
</script>

<template>
    <div
        :class="cn('flex h-max items-center gap-3 opacity-60', props.class"
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
