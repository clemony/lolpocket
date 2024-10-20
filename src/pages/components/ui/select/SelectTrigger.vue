<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
    SelectIcon,
    SelectTrigger,
    type SelectTriggerProps,
    useForwardProps,
} from 'radix-vue'

import { cn } from '../../../../lib/utils'

const props = defineProps<
    SelectTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <SelectTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-xs ring-offset-bg-base-100/90 placeholder:bg-base-200  focus:outline-none focus:ring-1 focus:ring-base-300/90 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
                props.class
            )
        ">
        <slot />
        <SelectIcon as-child>
            <icon
                icon="teenyicons:down-small-outline"
                class="w-4 h-4 opacity-50 shrink-0" />
        </SelectIcon>
    </SelectTrigger>
</template>
