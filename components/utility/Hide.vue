<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue'

const props = defineProps<{
    if?: boolean
}>()
</script>

<template>
    <VisuallyHidden>
        <slot />
    </VisuallyHidden>
</template>
