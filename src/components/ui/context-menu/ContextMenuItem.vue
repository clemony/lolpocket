<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
    ContextMenuItem,
    type ContextMenuItemEmits,
    type ContextMenuItemProps,
    useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@lib/utils'

const props = defineProps<
    ContextMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
<ContextMenuItem v-bind="forwarded" :class="cn(
    'relative flex cursor-default select-none items-center gap-3.5 rounded-sm px-2 py-1.5  font-medium outline-none focus:bg-base-200/60 focus:text-base-content data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    inset && 'pl-8',
    props.class
)
    ">
    <slot />
</ContextMenuItem>
</template>
