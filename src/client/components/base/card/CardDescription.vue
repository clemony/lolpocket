<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/client/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <p :class="cn('description text-2 text-bc/60', props.class)">
        <slot />
    </p>
</template>
