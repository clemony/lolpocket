<script setup lang="ts">
import { TagsInputItemText, type TagsInputItemTextProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

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
