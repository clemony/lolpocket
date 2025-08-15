<script lang="ts" setup>
import { queueIndex } from 'data/index/queue-index'
import type { PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  queueId: number
}>()

const queue = computed(() => {
  const foundQueue = queueIndex.find(q => q.queueId == props.queueId)
  if (!foundQueue)
    return null
  return foundQueue.description
})
</script>

<template>
  <Primitive v-bind="props">
    {{ queue }}
  </Primitive>
</template>