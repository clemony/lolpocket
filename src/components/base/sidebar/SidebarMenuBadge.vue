<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div
        data-sidebar="menu-badge"
        :class="
            cn(
                'pointer-events-none absolute right-1 flex min-w-5 select-none items-center justify-center px-1 font-size-1 tabular-nums',
                'peer-hover/menu-button:font-size-4-content peer-data-[active=true]/menu-button:font-size-4-content',
                'peer-data-[size=sm]/menu-button:top-1',
                'peer-data-[size=default]/menu-button:top-1.5',
                'peer-data-[size=lg]/menu-button:top-2.5',
                'group-data-[collapsible=icon]:hidden',
                props.class
            )
        ">
        <slot />
    </div>
</template>
