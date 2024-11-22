<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'

const props = withDefaults(
    defineProps<
        PrimitiveProps & {
            size?: 'sm' | 'md'
            isActive?: boolean
            class?: HTMLAttributes['class']
        }
    >(),
    {
        as: 'a',
        size: 'sm',
    }
)
</script>

<template>
    <Primitive
        data-sidebar="menu-sub-button"
        :as="as"
        :as-child="asChild"
        :data-size="size"
        :data-active="isActive"
        :class="
            cn(
                'flex h-8 w-full min-w-0 -translate-x-px cursor-pointer items-center gap-2 overflow-hidden rounded-md px-2 py-5 font-size-4-content outline-hidden ring-b3 hover:bg-b2 focus-visible:ring-1 active:bg-b2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:font-size-4-content',
                'data-[active=true]:bg-neutral/5 data-[active=true]:font-size-4-content',
                size === 'sm' && 'font-size-3',
                size === 'md' && 'font-size-3',
                'group-data-[collapsible=icon]:hidden',
                props.class
            )
        ">
        <slot />
    </Primitive>
</template>
