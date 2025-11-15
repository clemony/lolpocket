<script setup lang="ts">
import type { TagsInputItemTextProps } from 'reka-ui'
import { TagsInputItemText, useForwardProps } from 'reka-ui'

const props = defineProps<
  TagsInputItemTextProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemText
    v-bind="forwarded"
    :class="cn('bg-transparent px-2 py-0.5 text-3', props.class)" />
</template>
