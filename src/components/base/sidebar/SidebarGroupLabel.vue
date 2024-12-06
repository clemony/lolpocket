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
        data-sidebar="group-label"
        :as="as"
        :as-child="asChild"
        :class="
            cn(
                'text-sm+ mb-1 flex h-8 shrink-0 items-center rounded-md px-2 py-1.5 font-medium tracking-tight text-ac/70 outline-none ring-accent/5 transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-5 [&>svg]:shrink-0',
                'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
                props.class
            )
        ">
        <slot />
    </Primitive>
</template>
