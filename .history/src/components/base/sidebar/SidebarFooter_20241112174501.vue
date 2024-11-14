<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        data-sidebar="footer"
        :class="cn('flex flex-col gap-1 p-2 text-base', props.class)">
        <slot />
    </div>
</template>
