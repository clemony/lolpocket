<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    title: string
    shortcut: string
    variant?: string
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <Button
        variant="props.variant"
        size="sm"
        :class="cn('w-full', props.class)">
        <slot />
        <div class="grow text-left font-medium">
            {{ props.title }}
        </div>
        <div class="justify-end justify-self-end pr-2 text-xs opacity-80">
            {{ props.shortcut }}
        </div>
    </Button>
</template>

<style scoped></style>
