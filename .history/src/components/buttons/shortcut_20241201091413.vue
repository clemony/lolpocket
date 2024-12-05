<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    title: string
    shortcut: string
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <Button variant="ghost" size="sm" :class="cn('w-full', props.class)">
        <div class="flex size-7 items-center justify-center rounded-md">
            <slot name="icon" />
        </div>
        <div class="text-muted-foreground grow text-start font-medium">
            {{ props.title }}
        </div>
        <div class="justify-end justify-self-end pr-2 text-xs opacity-80">
            {{ props.shortcut }}
        </div>
    </Button>
</template>

<style scoped></style>
