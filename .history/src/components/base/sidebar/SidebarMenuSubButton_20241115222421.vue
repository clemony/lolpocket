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
                'flex h-8 w-full min-w-0 -translate-x-px cursor-pointer items-center gap-2 overflow-hidden rounded-md px-2 py-5 text-base-content outline-none ring-base-300 hover:bg-base-200 focus-visible:ring-2 active:bg-base-200 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-base-content',
                'data-[active=true]:bg-neutral/5 data-[active=true]:text-base-content',
                size === 'sm' && 'text-sm+',
                size === 'md' && 'text-sm+',
                'group-data-[collapsible=icon]:hidden',
                props.class
            )
        ">
        <slot />
    </Primitive>
</template>
