<script setup lang="ts">
import type { TagsInputItemProps } from 'reka-ui'
import { TagsInputItem, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem
    v-bind="forwarded"
    :class="cn('flex h-7 px-2 items-center rounded-md  data-[state=active]:ring-ring btn data-[state=active]:ring-2 data-[state=active]:ring-offset-2  font-medium ring-offset-background', props.class)">
    <slot />
  </TagsInputItem>
</template>
