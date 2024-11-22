<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(
    defineProps<
        PrimitiveProps & {
            showOnHover?: boolean
            class?: HTMLAttributes['class']
        }
    >(),
    {
        as: 'button',
    }
)
</script>

<template>
    <Primitive
        data-sidebar="menu-action"
        :class="
            cn(
                'absolute right-1 top-1.5 flex aspect-square h-full items-center justify-center rounded-md p-0 font-size-4-content outline-hidden ring-b3 transition-transform hover:bg-b2 hover:font-size-4-content focus-visible:ring-2 peer-hover/menu-button:font-size-4-content [&>svg]:size-5 [&>svg]:shrink-0',
                // Increases the hit area of the button on mobile.
                'after:absolute after:-inset-2 md:after:hidden',
                'peer-data-[size=sm]/menu-button:top-1',
                'peer-data-[size=default]/menu-button:top-1.5',
                'peer-data-[size=lg]/menu-button:top-2.5',
                'group-data-[collapsible=icon]:hidden',
                showOnHover &&
                    'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:font-size-4-content md:opacity-0',
                props.class
            )
        "
        :as="as"
        :as-child="asChild" />
</template>
