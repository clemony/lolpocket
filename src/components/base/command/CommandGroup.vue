<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue'
import { cn } from '@lib/utils'
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
    ComboboxGroupProps & {
        class?: HTMLAttributes['class']
        heading?: string
    }
>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
<ComboboxGroup v-bind="delegatedProps" :class="cn(
    'text-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]: [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:font-size-4-content/60',
    props.class
)
    ">
    <ComboboxLabel v-if="heading" class="w-full! px-2 py-1.5  font-medium font-size-4-content/60">
        {{ heading }}
    </ComboboxLabel>
    <slot />
</ComboboxGroup>
</template>
