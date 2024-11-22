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
                'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 font-size-2 font-medium outline-hidden focus:bg-b2/60 focus:font-size-4-content data-[state=open]:bg-b2/60 data-[state=open]:font-size-4-content/60',
                props.class
            )
        ">
        <slot />
    </MenubarTrigger>
</template>
