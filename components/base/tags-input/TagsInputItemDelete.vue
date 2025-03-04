<script setup lang="ts">
import { TagsInputItemDelete, useForwardProps } from 'reka-ui'
import type { TagsInputItemDeleteProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent mr-1', props.class)">
    <slot>
      <icon name="x-sm" class="w-4 h-4" />
    </slot>
  </TagsInputItemDelete>
</template>
