<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <p :class="cn('font-size-2 font-size-4-content/60', props.class)">
        <slot />
    </p>
</template>
