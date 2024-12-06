<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <p :class="cn('description text-sm text-ac/60', props.class)">
        <slot />
    </p>
</template>
