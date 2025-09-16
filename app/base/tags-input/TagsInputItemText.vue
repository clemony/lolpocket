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
    :class="cn('py-0.5 px-2 text-sm  bg-transparent', props.class)" />
</template>
