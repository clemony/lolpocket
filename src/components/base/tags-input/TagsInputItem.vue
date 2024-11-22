<script setup lang="ts">
import { cn } from '@lib/utils'
import {
    TagsInputItem,
    type TagsInputItemProps,
    useForwardProps,
} from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    TagsInputItemProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <TagsInputItem
        v-bind="forwardedProps"
        :class="
            cn(
                'flex h-7 items-center rounded-full bg-base-200/60 px-px py-2px data-[state=active]:ring-1 data-[state=active]:ring-neutral/80',
                props.class
            )
        ">
        <slot />
    </TagsInputItem>
</template>
