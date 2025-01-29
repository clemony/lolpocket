<script setup lang="ts">
import type { TagsInputItemTextProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { TagsInputItemText, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputItemTextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemText
    v-bind="forwardedProps"
    :class="cn('rounded-sm bg-transparent px-1.5 py-1', props.class)"
  />
</template>
