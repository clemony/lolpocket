<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        data-sidebar="header"
        :class="cn('text-sm+ flex flex-col gap-1 pb-2', props.class)">
        <slot />
    </div>
</template>
