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
                'ml-auto flex flex-nowrap items-center text-sm tracking-widest text-base-content/60',
                props.class
            )
        ">
        <slot />
    </span>
</template>
