<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    DropdownMenuItem,
    type DropdownMenuItemProps,
    useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <DropdownMenuItem
        v-bind="forwardedProps"
        :class="
            cn(
                'focus:bg-b2/60 focus:text-base-content relative flex cursor-default items-center gap-3 rounded-sm px-2 py-1.5 text-sm font-medium outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
                inset && 'pl-8',
                props.class
            )
        ">
        <slot />
    </DropdownMenuItem>
</template>
