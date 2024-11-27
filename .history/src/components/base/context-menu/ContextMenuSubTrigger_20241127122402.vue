<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
    ContextMenuSubTrigger,
    type ContextMenuSubTriggerProps,
    useForwardProps,
} from 'radix-vue'
import { cn } from '@lib/utils'

const props = defineProps<
    ContextMenuSubTriggerProps & {
        class?: HTMLAttributes['class']
        inset?: boolean
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
<ContextMenuSubTrigger v-bind="forwardedProps" :class="cn(
    'flex cursor-default select-none items-center gap-3.5 rounded-sm px-2 py-1.5  font-semibold outline-hidden focus:bg-base-200/60 focus:text-base-content data-[state=open]:bg-base-200/60 data-[state=open]:text-base-content',
    inset && 'pl-8',
    props.class
)
    ">
    <slot />
    <icon icon="teenyicons:right-small-outline" class="ml-auto h-4 w-4" />
</ContextMenuSubTrigger>
</template>
