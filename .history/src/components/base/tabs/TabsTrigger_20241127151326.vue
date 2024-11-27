<script setup lang="ts">
import { cn } from '@lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    TabsTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <TabsTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'ring-offset-b2 focus-visible:ring-ring data-[state=active]:bg-b1/90 data-[state=active]:text-base-content inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-xs',
                props.class
            )
        ">
        <span class="truncate">
            <slot />
        </span>
    </TabsTrigger>
</template>
