<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        data-sidebar="group"
        :class="
            cn('pypr-2 relative flex w-full min-w-0 flex-col', props.class)
        ">
        <slot />
    </div>
</template>
