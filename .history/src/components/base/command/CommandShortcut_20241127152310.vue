<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <span :class="cn('text-4-content/60 ml-auto tracking-widest', props.class)">
        <slot />
    </span>
</template>
