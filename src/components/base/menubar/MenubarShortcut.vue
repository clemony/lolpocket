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
                'text-2 text-bc/60 ml-auto flex flex-nowrap items-center tracking-widest',
                props.class
            )
        ">
        <slot />
    </span>
</template>
