<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <span
        :class="
            cn(
                'text-2 ml-auto flex gap-1 tracking-widest opacity-60',
                props.class
            )
        ">
        <slot />
    </span>
</template>
