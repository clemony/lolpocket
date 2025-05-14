<script setup lang="ts">
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'
import type { TagsInputRootEmits, TagsInputRootProps } from 'reka-ui'
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex flex-wrap gap-2 items-center rounded-lg border inset-shadow-xs border-b4/80  bg-b1 px-4 py-3 focus-within:ring-1 focus-within:ring-neutral/60 text-3', props.class)">
    <slot />
  </TagsInputRoot>
</template>
