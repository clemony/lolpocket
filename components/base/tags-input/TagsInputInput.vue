<script setup lang="ts">
import type { TagsInputInputProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { TagsInputInput, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput
    spellcheck="false"
    v-bind="forwardedProps"
    :class="cn('text-2 min-h-6 flex-1 bg-transparent px-2 focus:outline-hidden', props.class)"
  />
</template>
