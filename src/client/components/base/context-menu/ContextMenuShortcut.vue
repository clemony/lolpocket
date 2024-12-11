<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/client/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <span
        :class="
            cn('text-muted-foreground ml-auto tracking-widest', props.class)
        ">
        <slot />
    </span>
</template>
