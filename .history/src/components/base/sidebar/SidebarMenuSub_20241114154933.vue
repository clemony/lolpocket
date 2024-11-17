<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <ul
        data-sidebar="menu-badge"
        :class="
            cn(
                'ml-[13px] mr-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-base-300 py-1 pl-7 pr-2',
                'group-data-[collapsible=icon]:hidden',
                props.class
            )
        ">
        <slot />
    </ul>
</template>
