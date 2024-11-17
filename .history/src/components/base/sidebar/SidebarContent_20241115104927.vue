<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        data-sidebar="content"
        :class="
            cn(
                'flex min-h-0 flex-1 flex-col gap-1 overflow-auto px-1.5 group-data-[collapsible=icon]:overflow-hidden',
                props.class
            )
        ">
        <slot />
    </div>
</template>
