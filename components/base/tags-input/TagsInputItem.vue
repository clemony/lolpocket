<script setup lang="ts">
import { TagsInputItem, useForwardProps } from 'reka-ui'
import type { TagsInputItemProps } from 'reka-ui'

import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('flex h-7 px-2 items-center rounded-md  data-[state=active]:ring-ring btn data-[state=active]:ring-2 data-[state=active]:ring-offset-2  font-medium ring-offset-background', props.class)">
    <slot />
  </TagsInputItem>
</template>
