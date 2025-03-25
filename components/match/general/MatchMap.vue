<script lang="ts" setup>
import { Primitive } from 'reka-ui'
import type { PrimitiveProps } from 'reka-ui'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  match: any
  short?: boolean
}>()

const match = computed (() => {
  return props.match
})
const queue = computed(() => {
  const foundQueue = queues.find(q => q.queueId == match.value.queueId)
  if (!foundQueue)
    return null

  // Get the map replacement
  return !props.short ? foundQueue.map : mapDictionary[0][foundQueue.map] || foundQueue.map
})
</script>

<template>
  <Primitive v-bind="props">
    {{ queue }}
  </Primitive>
</template>