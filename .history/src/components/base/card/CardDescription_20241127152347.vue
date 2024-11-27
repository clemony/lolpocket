<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <p :class="cn('text-4-content/60 text-2', props.class)">
        <slot />
    </p>
</template>
