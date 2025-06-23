<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'reka-ui'
import { TagsInputRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex flex-wrap gap-2 items-center rounded-lg border  border-b3  bg-b1 px-4 py-3 focus-within:ring-1 focus-within:ring-neutral/60 text-3', props.class)">
    <slot />
  </TagsInputRoot>
</template>
