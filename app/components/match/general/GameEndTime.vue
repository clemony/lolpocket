<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { formatTimeAgo } from '@vueuse/core'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  endTime: number
}>()

const matchEnd = computed (() => {
  return formatTimeAgo(new Date(props.endTime))
})
</script>

<template>
  <Primitive v-bind="props">
    {{ matchEnd }}
  </Primitive>
</template>