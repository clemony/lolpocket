<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    MenubarTrigger,
    type MenubarTriggerProps,
    useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    MenubarTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <MenubarTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'focus:bg-b2/60 focus:text-base-content data-[state=open]:bg-b2/60 data-[state=open]:text-base-content/60 flex cursor-default items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden select-none',
                props.class
            )
        ">
        <slot />
    </MenubarTrigger>
</template>
