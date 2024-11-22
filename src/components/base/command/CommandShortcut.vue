<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template><span :class="cn(
    'ml-auto  tracking-widest font-size-4-content/60',
    props.class
)
    ">
    <slot />
</span></template>
