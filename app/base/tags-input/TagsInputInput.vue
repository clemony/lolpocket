<script setup lang="ts">
import type { TagsInputInputProps } from 'reka-ui'
import { TagsInputInput, useForwardProps } from 'reka-ui'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput v-bind="forwarded" :class="cn('text-3 min-h-5 focus:outline-none flex-1 bg-transparent px-1', props.class)" />
</template>
