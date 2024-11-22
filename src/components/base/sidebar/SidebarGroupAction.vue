<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'

const props = defineProps<
    PrimitiveProps & {
        class?: HTMLAttributes['class']
    }
>()
</script>

<template>
    <Primitive
        data-sidebar="group-action"
        :as="as"
        :as-child="asChild"
        :class="
            cn(
                'font-size-3font-size-4-content absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden ring-b3 transition-transform hover:bg-b2 hover:font-size-4-content focus-visible:ring-2 [&>svg]:size-5 [&>svg]:shrink-0',
                // Increases the hit area of the button on mobile.
                'after:absolute after:-inset-2 md:after:hidden',
                'group-data-[collapsible=icon]:hidden',
                props.class
            )
        ">
        <slot />
    </Primitive>
</template>
